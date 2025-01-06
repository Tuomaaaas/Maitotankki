import React, { createContext, useContext, useState, ReactNode } from "react";

type FarmInformationType = {
    farmId: number;
    farmName: string;
    camera_url: string;
    is_camera_active: boolean;
};

const defaultFarmInformation: FarmInformationType = {
    farmId: 0,
    farmName: '',
    camera_url: '',
    is_camera_active: false
};

interface FarmContextType {
    farmInformation: FarmInformationType;
    setFarmInformation: React.Dispatch<React.SetStateAction<FarmInformationType>>;
}

const FarmContext = createContext<FarmContextType | undefined>(undefined);

const useFarm = (): FarmContextType => {
    const context = useContext(FarmContext);
    if (!context) {
        throw new Error("useFarm must be used within a FarmProvider");
    }
    return context;
};

interface FarmProviderProps {
    children: ReactNode;
}

const FarmProvider = ({ children }: FarmProviderProps) => {
    const [farmInformation, setFarmInformation] = useState<FarmInformationType>(defaultFarmInformation);

    return (
        <FarmContext.Provider value={{ farmInformation, setFarmInformation }}>
            {children}
        </FarmContext.Provider>
    );
};

export { useFarm, FarmProvider };
