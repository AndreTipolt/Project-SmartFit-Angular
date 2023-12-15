import { Location } from "./Location.interface";

export interface UnitsResponse{
    current_country_id: number,
    locations: Location[],
}