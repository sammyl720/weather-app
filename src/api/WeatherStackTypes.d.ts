export interface Request {
      type: string;
      query: string;
      language: string;
      unit: string;
  }

  export interface Location {
      name: string;
      country: string;
      region: string;
      lat: string;
      lon: string;
      timezone_id: string;
      localtime: string;
      localtime_epoch: number;
      utc_offset: string;
  }

  export interface Current {
      observation_time: string;
      temperature: number;
      weather_code: number;
      weather_icons: string[];
      weather_descriptions: string[];
      wind_speed: number;
      wind_degree: number;
      wind_dir: string;
      pressure: number;
      precip: number;
      humidity: number;
      cloudcover: number;
      feelslike: number;
      uv_index: number;
      visibility: number;
      is_day: string;
  }

  export interface Astro {
      sunrise: string;
      sunset: string;
      moonrise: string;
      moonset: string;
      moon_phase: string;
      moon_illumination: number;
  }

  export interface Date {
      date: string;
      date_epoch: number;
      astro: Astro;
      mintemp: number;
      maxtemp: number;
      avgtemp: number;
      totalsnow: number;
      sunhour: number;
      uv_index: number;
  }

  export interface Forecast {
      [key: string]: Date;
  }

  export interface RootObject {
      data: Data;
  }

export interface Data {
    request: Request;
      location: Location;
      current: Current;
      forecast: Forecast;
}