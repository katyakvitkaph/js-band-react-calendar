import axios from 'axios';

const baseURL = 'http://158.101.166.74:8080/api/data/kate_kiriuhina';


export default class ServiceAPI {
    constructor() {
        this.server = baseURL;
        this.axios = axios;
        ServiceAPI.instance = this;
    }

    async initUsers(params) {
        const result = await this.axios.post(`${this.server}/users`, params);
        return result;

    }

    async getAllUsers() {
        const result = await this.axios.get(`${this.server}/users`);
        return result;
    }

    async addEvent(params) {
        const result = await this.axios.post(`${this.server}/events`, params);
        return result;

    }

    async getAllEvents() {
        const result = await this.axios.get(`${this.server}/events`);
        return result.data;

    }

    async deleteEvent(id) {
        const result = await this.axios.delete(`${this.server}/events/${id}`);
        return result;

    }
}


