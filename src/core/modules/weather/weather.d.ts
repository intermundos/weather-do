interface IWeatherStore {
    loading: boolean;
    error: boolean;
    position?: GeolocationPosition;
    location: TLocation | undefined;
}

type TLocation = {
    city: string;
    country: string;
}

type TLocationResponse = TLocation;
