interface IWeatherStore {
    loading: boolean;
    error: boolean;
    position?: GeolocationPosition;
}
