import { useEffect, useState } from "react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { useFarm } from "../context/FarmContext";
import { getFarm, getRekognitions } from "../api.ts";
import Header from "./Header.tsx";
import moment from 'moment'
import '../styles/DashboardPage.css'

type RekognitionData = {
    timestamp: string;
    temperature: number;
    flagged: boolean;
};

type RekognitionApiResponse = {
    id: number;
    rekognition_uuid: string;
    file_upload_id: number;
    farm_id: number;
    result: Record<string, string>;
    temperature: number;
    flagged: boolean | null;
    createdAt: string;
    updatedAt: string;
};

const DashboardPage = () => {
    const { farmInformation, setFarmInformation } = useFarm();
    const [loading, setLoading] = useState(false);
    const [rekognitions, setRekognitions] = useState<RekognitionData[]>([]);

    useEffect(() => {
        if (!farmInformation.farmId) {
            setLoading(true);
            const fetchFarmData = async () => {
                try {
                    const response = await getFarm();
                    const { id, name, camera_url, is_camera_active } = response.data;
                    setFarmInformation({
                        farmId: id,
                        farmName: name,
                        camera_url: camera_url,
                        is_camera_active: is_camera_active
                    });
                } catch (error) {
                    console.error('Error fetching farm settings:', error);
                } finally {
                    setLoading(false);
                }
            };

            fetchFarmData();
        }
    }, [farmInformation.farmId, setFarmInformation]);

    const loadRekognitionsData = () => {
        const cachedRekognitions = localStorage.getItem('rekognitions');
        const timestamp = localStorage.getItem('rekognitionsTimestamp');

        if (cachedRekognitions && timestamp) {
            const isCacheValid = checkCacheValidity(timestamp);

            if (isCacheValid) {
                setRekognitions(JSON.parse(cachedRekognitions));
                return;
            } else {
                localStorage.removeItem('rekognitions');
                localStorage.removeItem('rekognitionsTimestamp');
            }
        }

        setLoading(true);
        const fetchRekognitions = async () => {
            try {
                const response = await getRekognitions(1440, farmInformation.farmId);
                const formattedData = response.data.map((item: RekognitionApiResponse) => ({
                    timestamp: item.updatedAt,
                    temperature: item.temperature,
                    flagged: item.flagged !== null,
                }));

                const currentTimestamp = moment().toISOString();
                localStorage.setItem('rekognitions', JSON.stringify(formattedData));
                localStorage.setItem('rekognitionsTimestamp', currentTimestamp);

                setRekognitions(formattedData);
            } catch (error) {
                console.error('Error fetching rekognition results:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchRekognitions();
    };

    const checkCacheValidity = (timestamp: string): boolean => {
        const currentTime = moment();
        const storedTime = moment(timestamp);
        const diffMinutes = currentTime.diff(storedTime, 'minutes');

        return diffMinutes < 15;
    };

    useEffect(() => {
        if (farmInformation.farmId && rekognitions.length === 0) {
            loadRekognitionsData();
        }
    }, [farmInformation.farmId, rekognitions.length]);

    return (
        <div>
            <Header />
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div className="dashboard-container">
                    <h1 id="title">Welcome to the Dashboard! This is the dashboard for {farmInformation.farmName}</h1>
                    <div className="chart-container">
                        <ResponsiveContainer>
                            <LineChart
                                data={rekognitions}
                                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis
                                    dataKey="timestamp"
                                    tickFormatter={(timestamp) => moment(timestamp).format('HH:mm')} // Formatting timestamp
                                />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line
                                    type="monotone"
                                    dataKey="temperature"
                                    stroke="#8884d8"
                                    dot={(props) => {
                                        const { payload, index } = props;

                                        if (payload.flagged) {
                                            return <circle key={index} cx={props.cx} cy={props.cy} r={8} fill="#ff0000" />;
                                        }
                                        return <circle key={index} cx={props.cx} cy={props.cy} r={4} fill="#8884d8" />;
                                    }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DashboardPage;
