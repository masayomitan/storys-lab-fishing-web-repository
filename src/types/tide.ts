export interface Tide {
    id: number
    prefecture_id: number
    area_id: number
    date: string
    format_date: string
    sunrise_time: string | null
    sunset_time: string | null
    moonrise_time: string | null
    moonset_time: string | null
    weather: string
    temperature: number
    water_temperature: number
    wind_speed: number
    precipitation: number
    wave_height: number
    tide_flow: string
    low_tide_time_1: string | null
    high_tide_time_1: string | null
    low_tide_time_2: string | null
    high_tide_time_2: string | null
    low_tide_time_3: string | null
    high_tide_time_3: string | null
    tide_height_1: number
    tide_height_2: number
    tide_height_3: number
    moon_age: number
}
