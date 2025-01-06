import { useEffect, useState } from "react";
import { useFarm } from "../context/FarmContext";
import { getFarm } from "../api.ts";
import Header from "./Header.tsx";

const DashboardPage = () => {
    const { farmInformation, setFarmInformation } = useFarm();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchFarmData = async () => {
            if (!farmInformation) {
                setLoading(true);
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
            }
        };

        fetchFarmData();
    }, [farmInformation, setFarmInformation]);

    return (
        <div>
            <Header />
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div className="dashboard-container">
                    <h1>Welcome to the Dashboard! This is the dashboard for {farmInformation.farmName}</h1>
                </div>
            )}
        </div>
    );
};

export default DashboardPage;
