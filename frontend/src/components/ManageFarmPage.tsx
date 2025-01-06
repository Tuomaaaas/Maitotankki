import { useState, useEffect } from "react";
import { useFarm } from "../context/FarmContext.tsx";
import { updateFarm } from "../api.ts";
import Header from "./Header.tsx";
import '../styles/ManageFarmPage.css';

const ManageFarmPage = () => {
    const { farmInformation, setFarmInformation } = useFarm();

    const [farmObject, setFarmObject] = useState({
        farmName: '',
        camera_url: '',
        is_camera_active: false
    });

    useEffect(() => {
        setFarmObject({
            farmName: farmInformation.farmName,
            camera_url: farmInformation.camera_url,
            is_camera_active: farmInformation.is_camera_active
        });
    }, [farmInformation]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = event.target;
        setFarmObject(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleToggleCamera = () => {
        setFarmObject(prevState => ({
            ...prevState,
            is_camera_active: !prevState.is_camera_active
        }));
    };

    const handleSave = async () => {
        try {
            const farmData = {
                farmId: farmInformation.farmId,
                farmName: farmObject.farmName,
                cameraUrl: farmObject.camera_url,
                isCameraActive: farmObject.is_camera_active
            };

            const response = await updateFarm(farmData);
            setFarmInformation(response.data);
            alert('Farm settings saved!');
        } catch (error) {
            console.error('Error saving farm settings:', error);
            alert('Error saving farm settings.');
        }
    };

    return (
        <div className="manage-farm-container">
            <Header />
            <h1>Manage Farm: {farmInformation.farmName}</h1>

            <div className="farm-settings">
                <div className="form-group">
                    <label htmlFor="farmName">Farm Name</label>
                    <input
                        type="text"
                        id="farmName"
                        value={farmObject.farmName || ""}
                        onChange={handleInputChange}
                        placeholder="Enter farm name"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="camera_url">Camera URL</label>
                    <input
                        type="text"
                        id="camera_url"
                        value={farmObject.camera_url || ""}
                        onChange={handleInputChange}
                        placeholder="Enter camera URL"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="cameraStatus">Camera Status</label>
                    <div className="camera-toggle">
                        <span>{farmObject.is_camera_active ? 'Activated' : 'Deactivated'}</span>
                        <button
                            className={farmObject.is_camera_active ? 'btn-active' : 'btn-deactivate'}
                            onClick={handleToggleCamera}
                        >
                            {farmObject.is_camera_active ? 'Deactivate Camera' : 'Activate Camera'}
                        </button>
                    </div>
                </div>

                <div className="save-btn-container">
                    <button className="save-btn" onClick={handleSave}>
                        Save Settings
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ManageFarmPage;