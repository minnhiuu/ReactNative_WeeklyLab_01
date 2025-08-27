export const fetchData = async (url: string): Promise<any> => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const postData = async (url: string, data: any): Promise<any> => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error posting data:', error);
        throw error;
    }
};

export const simulateFileDownload = (url: string): Promise<void> => {
    return new Promise((resolve) => {
        console.log(`Simulating file download from ${url}`);
        setTimeout(() => {
            console.log('File downloaded successfully');
            resolve();
        }, 2000);
    });
};

export const retryFetch = async (url: string, retries: number = 3): Promise<any> => {
    for (let i = 0; i < retries; i++) {
        try {
            return await fetchData(url);
        } catch (error) {
            if (i === retries - 1) {
                throw error;
            }
            console.log(`Retrying... (${i + 1})`);
        }
    }
};