import fetchService from "./fetch";
import resourcesMockData from '../files/data.json'

class Services {

    getResources = async () => {
        const resources = await fetchService.get('resources');
        if(resources?.data?.length > 0) {
            return resources.data;
        }
        else {
            return resourcesMockData.resources;
        }
    }

    getActions = async () => {
        const actions = await fetchService.get('actions');
        if(actions?.data?.length > 0) {
            return actions.data;
        }
        else {
            return resourcesMockData.actions;
        }
    }

}

const services = new Services();
export default services;