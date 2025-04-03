import { cache } from 'react';
import { get } from '../services/api';

const apiCache = {};

export const fetchApiData = cache(async (endpoint) => {
    if (apiCache[endpoint]) {
        return apiCache[endpoint];
    }
    try {
        const data = await get(endpoint);
        const result = { data, error: null };
        apiCache[endpoint] = result;
        return result;
    } catch (error) {
        console.error(`Error fetching data from ${endpoint}:`, error);
        const errorResult = { data: null, error: error.message || "An error occurred" };
        apiCache[endpoint] = errorResult;
        return errorResult;
    }
});