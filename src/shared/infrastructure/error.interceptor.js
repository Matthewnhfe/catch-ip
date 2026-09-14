/**
 * Axios Interception for handing errors in API requests.
 *
 * @remarks
 * This interceptions captures errores from Axios request and provides a structured way to handle them.
 * It logs detailed information about the error to the console and returns a user-friendly error message.*
 */
export const errorInterceptor = {
    /**
     * Handles the response from an Axios request.
     * @param {import('axios').AxiosResponse} response - The response object from the Axios request.
     * @returns {import('axios')Axios} -
     */
    onResponse: (response) => response,
    onError: (error) => {
        let message;
        if (error.response){
            console.error('Data: ', error.response.data);
            console.error('Status: ', error.response.status);
            console.error('Header: ', error.response.headers);
            message = error.response.data['message'] || `Error: ${error.response.status}: ${error.response.statusText}`;

        } else if (error.request) {
            console.error('Request: ', error.request);
            message = 'No response received from the server. Please check your network connection.';
        } else{
            console.error('Error Message: ', error.message);
            message = error.message;
        }
        return Promise.reject(message);
    }
}