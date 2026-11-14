class AppError extends Error {


    httpStatusCode: number;
    override name: string;

    constructor(message: string, httpStatusCode: number){
        super(message)
        this.httpStatusCode = httpStatusCode;
        this.name = 'AppError';
    }
}


export default AppError;