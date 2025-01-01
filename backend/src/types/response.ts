export interface Response<DataType> {
    success: boolean,
    data?: DataType,
    error?: string;
}

export default Response;