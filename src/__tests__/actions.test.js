import { setLocation, setWeather, setTemps, setDates } from "../redux/actions";

describe("actions", () => {
  describe("setLocation", () => {
    it('should have a type of "SET_LOCATION"', () => {
      expect(setLocation().type).toEqual("SET_LOCATION");
    });

    it("should pass on the location we pass in ", () => {
      let location = "delhi, India";
      expect(setLocation(location).payload).toEqual(location);
    });
  });

  describe("setWeather", () => {
    it('should have a type of "SET_WEATHER', () =>
      expect(setWeather().type).toEqual("SET_WEATHER"));
    it("should pass on the weather object we pass in ", () => {
      let weather = { temp: 0, message: "hello" };
      expect(setWeather(weather).payload).toEqual(weather);
    });
  });

  describe("setTemps", () => {
    it('should have the type of "SET_TEMPS', () =>
      expect(setTemps().type).toEqual("SET_TEMPS"));

    it("should pass on the temps array we pass in ", () => {
      let temps = [30, 40];
      expect(setTemps(temps).payload).toEqual(temps);
    });
  });

  describe("setDates", () => {
    it('should have the type of "SET_DATES', () =>
      expect(setDates().type).toEqual("SET_DATES"));

    it("should pass on the dates array we pass in ", () => {
      let dates = ["2020-01-01", "2020-01-02"];
      expect(setDates(dates).payload).toEqual(dates);
    });
  });
});
