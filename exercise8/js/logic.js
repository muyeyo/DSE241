// Function to determine marker size based on number of positive cases per county

function posCaseMarkerSize(numPosCase) {
  return numPosCase*2;
}

// An array containing all of the information needed to create county markers

var locations = [
  {
    Year: 2006,
    Week_Reported: 35,
    County: "Alameda",
    id: 6001,
    Positive_Cases: 1,
    Coordinates: [
      37.770563,
      -122.264779
    ]
  },
  {
    Year: 2008,
    Week_Reported: 32,
    County: "Alameda",
    id: 6001,
    Positive_Cases: 1,
    Coordinates: [37.770563, -122.264779]
  },
  {
    Year: 2010,
    Week_Reported: 43,
    County: "Alameda",
    id: 6001,
    Positive_Cases: 1,
    Coordinates: [
      37.770563,
      -122.264779
    ]
  },
  {
    Year: 2012,
    Week_Reported: 42,
    County: "Alameda",
    id: 6001,
    Positive_Cases: 1,
    Coordinates: [
      37.770563,
      -122.264779
    ]
  },
  {
    Year: 2012,
    Week_Reported: 43,
    County: "Alameda",
    id: 6001,
    Positive_Cases: 1,
    Coordinates: [
      37.770563,
      -122.264779
    ]
  },
  {
    Year: 2014,
    Week_Reported: 39,
    County: "Alameda",
    id: 6001,
    Positive_Cases: 1,
    Coordinates: [
      37.770563,
      -122.264779
    ]
  },
  {
    Year: 2006,
    Week_Reported: 33,
    County: "Butte",
    id: 6007,
    Positive_Cases: 4,
    Coordinates: [
      44.93037,
      -103.87313
    ]
  },
  {
    Year: 2006,
    Week_Reported: 34,
    County: "Butte",
    id: 6007,
    Positive_Cases: 1,
    Coordinates: [
      44.93037,
      -103.87313
    ]
  },
  {
    Year: 2006,
    Week_Reported: 35,
    County: "Butte",
    id: 6007,
    Positive_Cases: 10,
    Coordinates: [
      44.93037,
      -103.87313
    ]
  },
  {
    Year: 2006,
    Week_Reported: 36,
    County: "Butte",
    id: 6007,
    Positive_Cases: 2,
    Coordinates: [
      44.93037,
      -103.87313
    ]
  },
  {
    Year: 2006,
    Week_Reported: 37,
    County: "Butte",
    id: 6007,
    Positive_Cases: 8,
    Coordinates: [
      44.93037,
      -103.87313
    ]
  },
  {
    Year: 2006,
    Week_Reported: 38,
    County: "Butte",
    id: 6007,
    Positive_Cases: 3,
    Coordinates: [
      44.93037,
      -103.87313
    ]
  },
  {
    Year: 2006,
    Week_Reported: 39,
    County: "Butte",
    id: 6007,
    Positive_Cases: 2,
    Coordinates: [
      44.93037,
      -103.87313
    ]
  },
  {
    Year: 2006,
    Week_Reported: 43,
    County: "Butte",
    id: 6007,
    Positive_Cases: 1,
    Coordinates: [
      44.93037,
      -103.87313
    ]
  },
  {
    Year: 2007,
    Week_Reported: 30,
    County: "Butte",
    id: 6007,
    Positive_Cases: 2,
    Coordinates: [
      44.93037,
      -103.87313
    ]
  },
  {
    Year: 2007,
    Week_Reported: 32,
    County: "Butte",
    id: 6007,
    Positive_Cases: 4,
    Coordinates: [
      44.93037,
      -103.87313
    ]
  },
  {
    Year: 2007,
    Week_Reported: 33,
    County: "Butte",
    id: 6007,
    Positive_Cases: 1,
    Coordinates: [
      44.93037,
      -103.87313
    ]
  },
  {
    Year: 2007,
    Week_Reported: 34,
    County: "Butte",
    id: 6007,
    Positive_Cases: 1,
    Coordinates: [
      44.93037,
      -103.87313
    ]
  },
  {
    Year: 2007,
    Week_Reported: 35,
    County: "Butte",
    id: 6007,
    Positive_Cases: 2,
    Coordinates: [
      44.93037,
      -103.87313
    ]
  },
  {
    Year: 2007,
    Week_Reported: 36,
    County: "Butte",
    id: 6007,
    Positive_Cases: 1,
    Coordinates: [
      44.93037,
      -103.87313
    ]
  },
  {
    Year: 2007,
    Week_Reported: 37,
    County: "Butte",
    id: 6007,
    Positive_Cases: 5,
    Coordinates: [
      44.93037,
      -103.87313
    ]
  },
  {
    Year: 2008,
    Week_Reported: 32,
    County: "Butte",
    id: 6007,
    Positive_Cases: 1,
    Coordinates: [
      44.93037,
      -103.87313
    ]
  },
  {
    Year: 2008,
    Week_Reported: 34,
    County: "Butte",
    id: 6007,
    Positive_Cases: 1,
    Coordinates: [
      44.93037,
      -103.87313
    ]
  },
  {
    Year: 2008,
    Week_Reported: 37,
    County: "Butte",
    id: 6007,
    Positive_Cases: 2,
    Coordinates: [
      44.93037,
      -103.87313
    ]
  },
  {
    Year: 2008,
    Week_Reported: 40,
    County: "Butte",
    id: 6007,
    Positive_Cases: 1,
    Coordinates: [
      44.93037,
      -103.87313
    ]
  },
  {
    Year: 2008,
    Week_Reported: 50,
    County: "Butte",
    id: 6007,
    Positive_Cases: 1,
    Coordinates: [
      44.93037,
      -103.87313
    ]
  },
  {
    Year: 2009,
    Week_Reported: 36,
    County: "Butte",
    id: 6007,
    Positive_Cases: 1,
    Coordinates: [
      44.93037,
      -103.87313
    ]
  },
  {
    Year: 2009,
    Week_Reported: 41,
    County: "Butte",
    id: 6007,
    Positive_Cases: 1,
    Coordinates: [
      44.93037,
      -103.87313
    ]
  },
  {
    Year: 2010,
    Week_Reported: 33,
    County: "Butte",
    id: 6007,
    Positive_Cases: 1,
    Coordinates: [
      44.93037,
      -103.87313
    ]
  },
  {
    Year: 2011,
    Week_Reported: 35,
    County: "Butte",
    id: 6007,
    Positive_Cases: 1,
    Coordinates: [
      44.93037,
      -103.87313
    ]
  },
  {
    Year: 2011,
    Week_Reported: 37,
    County: "Butte",
    id: 6007,
    Positive_Cases: 1,
    Coordinates: [
      44.93037,
      -103.87313
    ]
  },
  {
    Year: 2011,
    Week_Reported: 40,
    County: "Butte",
    id: 6007,
    Positive_Cases: 1,
    Coordinates: [
      44.93037,
      -103.87313
    ]
  },
  {
    Year: 2012,
    Week_Reported: 33,
    County: "Butte",
    id: 6007,
    Positive_Cases: 1,
    Coordinates: [
      44.93037,
      -103.87313
    ]
  },
  {
    Year: 2012,
    Week_Reported: 35,
    County: "Butte",
    id: 6007,
    Positive_Cases: 3,
    Coordinates: [
      44.93037,
      -103.87313
    ]
  },
  {
    Year: 2012,
    Week_Reported: 37,
    County: "Butte",
    id: 6007,
    Positive_Cases: 2,
    Coordinates: [
      44.93037,
      -103.87313
    ]
  },
  {
    Year: 2012,
    Week_Reported: 40,
    County: "Butte",
    id: 6007,
    Positive_Cases: 2,
    Coordinates: [
      44.93037,
      -103.87313
    ]
  },
  {
    Year: 2012,
    Week_Reported: 41,
    County: "Butte",
    id: 6007,
    Positive_Cases: 2,
    Coordinates: [
      44.93037,
      -103.87313
    ]
  },
  {
    Year: 2013,
    Week_Reported: 32,
    County: "Butte",
    id: 6007,
    Positive_Cases: 1,
    Coordinates: [
      44.93037,
      -103.87313
    ]
  },
  {
    Year: 2013,
    Week_Reported: 34,
    County: "Butte",
    id: 6007,
    Positive_Cases: 2,
    Coordinates: [
      44.93037,
      -103.87313
    ]
  },
  {
    Year: 2013,
    Week_Reported: 35,
    County: "Butte",
    id: 6007,
    Positive_Cases: 5,
    Coordinates: [
      44.93037,
      -103.87313
    ]
  },
  {
    Year: 2013,
    Week_Reported: 37,
    County: "Butte",
    id: 6007,
    Positive_Cases: 1,
    Coordinates: [
      44.93037,
      -103.87313
    ]
  },
  {
    Year: 2013,
    Week_Reported: 38,
    County: "Butte",
    id: 6007,
    Positive_Cases: 8,
    Coordinates: [
      44.93037,
      -103.87313
    ]
  },
  {
    Year: 2013,
    Week_Reported: 39,
    County: "Butte",
    id: 6007,
    Positive_Cases: 2,
    Coordinates: [
      44.93037,
      -103.87313
    ]
  },
  {
    Year: 2013,
    Week_Reported: 40,
    County: "Butte",
    id: 6007,
    Positive_Cases: 1,
    Coordinates: [
      44.93037,
      -103.87313
    ]
  },
  {
    Year: 2013,
    Week_Reported: 41,
    County: "Butte",
    id: 6007,
    Positive_Cases: 1,
    Coordinates: [
      44.93037,
      -103.87313
    ]
  },
  {
    Year: 2013,
    Week_Reported: 42,
    County: "Butte",
    id: 6007,
    Positive_Cases: 1,
    Coordinates: [
      44.93037,
      -103.87313
    ]
  },
  {
    Year: 2013,
    Week_Reported: 43,
    County: "Butte",
    id: 6007,
    Positive_Cases: 1,
    Coordinates: [
      44.93037,
      -103.87313
    ]
  },
  {
    Year: 2013,
    Week_Reported: 53,
    County: "Butte",
    id: 6007,
    Positive_Cases: 1,
    Coordinates: [
      44.93037,
      -103.87313
    ]
  },
  {
    Year: 2014,
    Week_Reported: 30,
    County: "Butte",
    id: 6007,
    Positive_Cases: 1,
    Coordinates: [
      44.93037,
      -103.87313
    ]
  },
  {
    Year: 2014,
    Week_Reported: 31,
    County: "Butte",
    id: 6007,
    Positive_Cases: 3,
    Coordinates: [
      44.93037,
      -103.87313
    ]
  },
  {
    Year: 2014,
    Week_Reported: 33,
    County: "Butte",
    id: 6007,
    Positive_Cases: 4,
    Coordinates: [
      44.93037,
      -103.87313
    ]
  },
  {
    Year: 2014,
    Week_Reported: 34,
    County: "Butte",
    id: 6007,
    Positive_Cases: 3,
    Coordinates: [
      44.93037,
      -103.87313
    ]
  },
  {
    Year: 2014,
    Week_Reported: 35,
    County: "Butte",
    id: 6007,
    Positive_Cases: 1,
    Coordinates: [
      44.93037,
      -103.87313
    ]
  },
  {
    Year: 2014,
    Week_Reported: 36,
    County: "Butte",
    id: 6007,
    Positive_Cases: 4,
    Coordinates: [
      44.93037,
      -103.87313
    ]
  },
  {
    Year: 2014,
    Week_Reported: 38,
    County: "Butte",
    id: 6007,
    Positive_Cases: 3,
    Coordinates: [
      44.93037,
      -103.87313
    ]
  },
  {
    Year: 2014,
    Week_Reported: 39,
    County: "Butte",
    id: 6007,
    Positive_Cases: 1,
    Coordinates: [
      44.93037,
      -103.87313
    ]
  },
  {
    Year: 2014,
    Week_Reported: 40,
    County: "Butte",
    id: 6007,
    Positive_Cases: 1,
    Coordinates: [
      44.93037,
      -103.87313
    ]
  },
  {
    Year: 2014,
    Week_Reported: 41,
    County: "Butte",
    id: 6007,
    Positive_Cases: 1,
    Coordinates: [
      44.93037,
      -103.87313
    ]
  },
  {
    Year: 2014,
    Week_Reported: 48,
    County: "Butte",
    id: 6007,
    Positive_Cases: 1,
    Coordinates: [
      44.93037,
      -103.87313
    ]
  },
  {
    Year: 2014,
    Week_Reported: 49,
    County: "Butte",
    id: 6007,
    Positive_Cases: 1,
    Coordinates: [
      44.93037,
      -103.87313
    ]
  },
  {
    Year: 2015,
    Week_Reported: 30,
    County: "Butte",
    id: 6007,
    Positive_Cases: 3,
    Coordinates: [
      44.93037,
      -103.87313
    ]
  },
  {
    Year: 2015,
    Week_Reported: 31,
    County: "Butte",
    id: 6007,
    Positive_Cases: 3,
    Coordinates: [
      44.93037,
      -103.87313
    ]
  },
  {
    Year: 2015,
    Week_Reported: 32,
    County: "Butte",
    id: 6007,
    Positive_Cases: 10,
    Coordinates: [
      44.93037,
      -103.87313
    ]
  },
  {
    Year: 2015,
    Week_Reported: 33,
    County: "Butte",
    id: 6007,
    Positive_Cases: 14,
    Coordinates: [
      44.93037,
      -103.87313
    ]
  },
  {
    Year: 2015,
    Week_Reported: 34,
    County: "Butte",
    id: 6007,
    Positive_Cases: 6,
    Coordinates: [
      44.93037,
      -103.87313
    ]
  },
  {
    Year: 2015,
    Week_Reported: 35,
    County: "Butte",
    id: 6007,
    Positive_Cases: 2,
    Coordinates: [
      44.93037,
      -103.87313
    ]
  },
  {
    Year: 2015,
    Week_Reported: 36,
    County: "Butte",
    id: 6007,
    Positive_Cases: 2,
    Coordinates: [
      44.93037,
      -103.87313
    ]
  },
  {
    Year: 2015,
    Week_Reported: 37,
    County: "Butte",
    id: 6007,
    Positive_Cases: 2,
    Coordinates: [
      44.93037,
      -103.87313
    ]
  },
  {
    Year: 2015,
    Week_Reported: 38,
    County: "Butte",
    id: 6007,
    Positive_Cases: 1,
    Coordinates: [
      44.93037,
      -103.87313
    ]
  },
  {
    Year: 2015,
    Week_Reported: 39,
    County: "Butte",
    id: 6007,
    Positive_Cases: 4,
    Coordinates: [
      44.93037,
      -103.87313
    ]
  },
  {
    Year: 2015,
    Week_Reported: 40,
    County: "Butte",
    id: 6007,
    Positive_Cases: 1,
    Coordinates: [
      44.93037,
      -103.87313
    ]
  },
  {
    Year: 2015,
    Week_Reported: 41,
    County: "Butte",
    id: 6007,
    Positive_Cases: 2,
    Coordinates: [
      44.93037,
      -103.87313
    ]
  },
  {
    Year: 2015,
    Week_Reported: 42,
    County: "Butte",
    id: 6007,
    Positive_Cases: 1,
    Coordinates: [
      44.93037,
      -103.87313
    ]
  },
  {
    Year: 2015,
    Week_Reported: 43,
    County: "Butte",
    id: 6007,
    Positive_Cases: 1,
    Coordinates: [
      44.93037,
      -103.87313
    ]
  },
  {
    Year: 2015,
    Week_Reported: 44,
    County: "Butte",
    id: 6007,
    Positive_Cases: 1,
    Coordinates: [
      44.93037,
      -103.87313
    ]
  },
  {
    Year: 2006,
    Week_Reported: 31,
    County: "Colusa",
    id: 6011,
    Positive_Cases: 1,
    Coordinates: [
      39.0134,
      -121.996852
    ]
  },
  {
    Year: 2006,
    Week_Reported: 35,
    County: "Colusa",
    id: 6011,
    Positive_Cases: 1,
    Coordinates: [
      39.0134,
      -121.996852
    ]
  },
  {
    Year: 2006,
    Week_Reported: 41,
    County: "Colusa",
    id: 6011,
    Positive_Cases: 1,
    Coordinates: [
      39.0134,
      -121.996852
    ]
  },
  {
    Year: 2007,
    Week_Reported: 30,
    County: "Colusa",
    id: 6011,
    Positive_Cases: 1,
    Coordinates: [
      39.0134,
      -121.996852
    ]
  },
  {
    Year: 2007,
    Week_Reported: 39,
    County: "Colusa",
    id: 6011,
    Positive_Cases: 1,
    Coordinates: [
      39.0134,
      -121.996852
    ]
  },
  {
    Year: 2008,
    Week_Reported: 36,
    County: "Colusa",
    id: 6011,
    Positive_Cases: 1,
    Coordinates: [
      39.0134,
      -121.996852
    ]
  },
  {
    Year: 2012,
    Week_Reported: 37,
    County: "Colusa",
    id: 6011,
    Positive_Cases: 1,
    Coordinates: [
      39.0134,
      -121.996852
    ]
  },
  {
    Year: 2012,
    Week_Reported: 38,
    County: "Colusa",
    id: 6011,
    Positive_Cases: 1,
    Coordinates: [
      39.0134,
      -121.996852
    ]
  },
  {
    Year: 2012,
    Week_Reported: 41,
    County: "Colusa",
    id: 6011,
    Positive_Cases: 1,
    Coordinates: [
      39.0134,
      -121.996852
    ]
  },
  {
    Year: 2013,
    Week_Reported: 33,
    County: "Colusa",
    id: 6011,
    Positive_Cases: 1,
    Coordinates: [
      39.0134,
      -121.996852
    ]
  },
  {
    Year: 2013,
    Week_Reported: 38,
    County: "Colusa",
    id: 6011,
    Positive_Cases: 1,
    Coordinates: [
      39.0134,
      -121.996852
    ]
  },
  {
    Year: 2014,
    Week_Reported: 33,
    County: "Colusa",
    id: 6011,
    Positive_Cases: 1,
    Coordinates: [
      39.0134,
      -121.996852
    ]
  },
  {
    Year: 2014,
    Week_Reported: 34,
    County: "Colusa",
    id: 6011,
    Positive_Cases: 1,
    Coordinates: [
      39.0134,
      -121.996852
    ]
  },
  {
    Year: 2014,
    Week_Reported: 42,
    County: "Colusa",
    id: 6011,
    Positive_Cases: 1,
    Coordinates: [
      39.0134,
      -121.996852
    ]
  },
  {
    Year: 2015,
    Week_Reported: 35,
    County: "Colusa",
    id: 6011,
    Positive_Cases: 1,
    Coordinates: [
      39.0134,
      -121.996852
    ]
  },
  {
    Year: 2006,
    Week_Reported: 34,
    County: "Contra Costa",
    id: 6013,
    Positive_Cases: 3,
    Coordinates: [
      37.832075,
      -121.916718
    ]
  },
  {
    Year: 2006,
    Week_Reported: 35,
    County: "Contra Costa",
    id: 6013,
    Positive_Cases: 1,
    Coordinates: [
      37.832075,
      -121.916718
    ]
  },
  {
    Year: 2006,
    Week_Reported: 36,
    County: "Contra Costa",
    id: 6013,
    Positive_Cases: 1,
    Coordinates: [
      37.832075,
      -121.916718
    ]
  },
  {
    Year: 2006,
    Week_Reported: 37,
    County: "Contra Costa",
    id: 6013,
    Positive_Cases: 1,
    Coordinates: [
      37.832075,
      -121.916718
    ]
  },
  {
    Year: 2006,
    Week_Reported: 38,
    County: "Contra Costa",
    id: 6013,
    Positive_Cases: 1,
    Coordinates: [
      37.832075,
      -121.916718
    ]
  },
  {
    Year: 2006,
    Week_Reported: 39,
    County: "Contra Costa",
    id: 6013,
    Positive_Cases: 1,
    Coordinates: [
      37.832075,
      -121.916718
    ]
  },
  {
    Year: 2007,
    Week_Reported: 38,
    County: "Contra Costa",
    id: 6013,
    Positive_Cases: 1,
    Coordinates: [
      37.832075,
      -121.916718
    ]
  },
  {
    Year: 2007,
    Week_Reported: 39,
    County: "Contra Costa",
    id: 6013,
    Positive_Cases: 1,
    Coordinates: [
      37.832075,
      -121.916718
    ]
  },
  {
    Year: 2007,
    Week_Reported: 50,
    County: "Contra Costa",
    id: 6013,
    Positive_Cases: 1,
    Coordinates: [
      37.832075,
      -121.916718
    ]
  },
  {
    Year: 2008,
    Week_Reported: 36,
    County: "Contra Costa",
    id: 6013,
    Positive_Cases: 1,
    Coordinates: [
      37.832075,
      -121.916718
    ]
  },
  {
    Year: 2008,
    Week_Reported: 38,
    County: "Contra Costa",
    id: 6013,
    Positive_Cases: 1,
    Coordinates: [
      37.832075,
      -121.916718
    ]
  },
  {
    Year: 2008,
    Week_Reported: 40,
    County: "Contra Costa",
    id: 6013,
    Positive_Cases: 2,
    Coordinates: [
      37.832075,
      -121.916718
    ]
  },
  {
    Year: 2009,
    Week_Reported: 31,
    County: "Contra Costa",
    id: 6013,
    Positive_Cases: 1,
    Coordinates: [
      37.832075,
      -121.916718
    ]
  },
  {
    Year: 2009,
    Week_Reported: 42,
    County: "Contra Costa",
    id: 6013,
    Positive_Cases: 4,
    Coordinates: [
      37.832075,
      -121.916718
    ]
  },
  {
    Year: 2010,
    Week_Reported: 40,
    County: "Contra Costa",
    id: 6013,
    Positive_Cases: 3,
    Coordinates: [
      37.832075,
      -121.916718
    ]
  },
  {
    Year: 2010,
    Week_Reported: 49,
    County: "Contra Costa",
    id: 6013,
    Positive_Cases: 1,
    Coordinates: [
      37.832075,
      -121.916718
    ]
  },
  {
    Year: 2011,
    Week_Reported: 39,
    County: "Contra Costa",
    id: 6013,
    Positive_Cases: 1,
    Coordinates: [
      37.832075,
      -121.916718
    ]
  },
  {
    Year: 2011,
    Week_Reported: 40,
    County: "Contra Costa",
    id: 6013,
    Positive_Cases: 1,
    Coordinates: [
      37.832075,
      -121.916718
    ]
  },
  {
    Year: 2011,
    Week_Reported: 41,
    County: "Contra Costa",
    id: 6013,
    Positive_Cases: 1,
    Coordinates: [
      37.832075,
      -121.916718
    ]
  },
  {
    Year: 2012,
    Week_Reported: 37,
    County: "Contra Costa",
    id: 6013,
    Positive_Cases: 1,
    Coordinates: [
      37.832075,
      -121.916718
    ]
  },
  {
    Year: 2012,
    Week_Reported: 38,
    County: "Contra Costa",
    id: 6013,
    Positive_Cases: 1,
    Coordinates: [
      37.832075,
      -121.916718
    ]
  },
  {
    Year: 2012,
    Week_Reported: 42,
    County: "Contra Costa",
    id: 6013,
    Positive_Cases: 1,
    Coordinates: [
      37.832075,
      -121.916718
    ]
  },
  {
    Year: 2012,
    Week_Reported: 49,
    County: "Contra Costa",
    id: 6013,
    Positive_Cases: 1,
    Coordinates: [
      37.832075,
      -121.916718
    ]
  },
  {
    Year: 2013,
    Week_Reported: 32,
    County: "Contra Costa",
    id: 6013,
    Positive_Cases: 1,
    Coordinates: [
      37.832075,
      -121.916718
    ]
  },
  {
    Year: 2013,
    Week_Reported: 34,
    County: "Contra Costa",
    id: 6013,
    Positive_Cases: 1,
    Coordinates: [
      37.832075,
      -121.916718
    ]
  },
  {
    Year: 2013,
    Week_Reported: 39,
    County: "Contra Costa",
    id: 6013,
    Positive_Cases: 1,
    Coordinates: [
      37.832075,
      -121.916718
    ]
  },
  {
    Year: 2013,
    Week_Reported: 42,
    County: "Contra Costa",
    id: 6013,
    Positive_Cases: 1,
    Coordinates: [
      37.832075,
      -121.916718
    ]
  },
  {
    Year: 2013,
    Week_Reported: 45,
    County: "Contra Costa",
    id: 6013,
    Positive_Cases: 1,
    Coordinates: [
      37.832075,
      -121.916718
    ]
  },
  {
    Year: 2014,
    Week_Reported: 25,
    County: "Contra Costa",
    id: 6013,
    Positive_Cases: 1,
    Coordinates: [
      37.832075,
      -121.916718
    ]
  },
  {
    Year: 2014,
    Week_Reported: 39,
    County: "Contra Costa",
    id: 6013,
    Positive_Cases: 1,
    Coordinates: [
      37.832075,
      -121.916718
    ]
  },
  {
    Year: 2014,
    Week_Reported: 40,
    County: "Contra Costa",
    id: 6013,
    Positive_Cases: 1,
    Coordinates: [
      37.832075,
      -121.916718
    ]
  },
  {
    Year: 2014,
    Week_Reported: 41,
    County: "Contra Costa",
    id: 6013,
    Positive_Cases: 1,
    Coordinates: [
      37.832075,
      -121.916718
    ]
  },
  {
    Year: 2014,
    Week_Reported: 52,
    County: "Contra Costa",
    id: 6013,
    Positive_Cases: 1,
    Coordinates: [
      37.832075,
      -121.916718
    ]
  },
  {
    Year: 2015,
    Week_Reported: 41,
    County: "Contra Costa",
    id: 6013,
    Positive_Cases: 1,
    Coordinates: [
      37.832075,
      -121.916718
    ]
  },
  {
    Year: 2006,
    Week_Reported: 34,
    County: "El Dorado",
    id: 6017,
    Positive_Cases: 1,
    Coordinates: [
      38.81419,
      -120.895188
    ]
  },
  {
    Year: 2006,
    Week_Reported: 48,
    County: "El Dorado",
    id: 6017,
    Positive_Cases: 1,
    Coordinates: [
      38.81419,
      -120.895188
    ]
  },
  {
    Year: 2008,
    Week_Reported: 40,
    County: "El Dorado",
    id: 6017,
    Positive_Cases: 1,
    Coordinates: [
      38.81419,
      -120.895188
    ]
  },
  {
    Year: 2009,
    Week_Reported: 37,
    County: "El Dorado",
    id: 6017,
    Positive_Cases: 1,
    Coordinates: [
      38.81419,
      -120.895188
    ]
  },
  {
    Year: 2011,
    Week_Reported: 38,
    County: "El Dorado",
    id: 6017,
    Positive_Cases: 1,
    Coordinates: [
      38.81419,
      -120.895188
    ]
  },
  {
    Year: 2013,
    Week_Reported: 35,
    County: "El Dorado",
    id: 6017,
    Positive_Cases: 1,
    Coordinates: [
      38.81419,
      -120.895188
    ]
  },
  {
    Year: 2006,
    Week_Reported: 30,
    County: "Fresno",
    id: 6019,
    Positive_Cases: 1,
    Coordinates: [
      36.247025,
      -120.381432
    ]
  },
  {
    Year: 2006,
    Week_Reported: 33,
    County: "Fresno",
    id: 6019,
    Positive_Cases: 3,
    Coordinates: [
      36.247025,
      -120.381432
    ]
  },
  {
    Year: 2006,
    Week_Reported: 34,
    County: "Fresno",
    id: 6019,
    Positive_Cases: 1,
    Coordinates: [
      36.247025,
      -120.381432
    ]
  },
  {
    Year: 2006,
    Week_Reported: 35,
    County: "Fresno",
    id: 6019,
    Positive_Cases: 2,
    Coordinates: [
      36.247025,
      -120.381432
    ]
  },
  {
    Year: 2006,
    Week_Reported: 36,
    County: "Fresno",
    id: 6019,
    Positive_Cases: 1,
    Coordinates: [
      36.247025,
      -120.381432
    ]
  },
  {
    Year: 2006,
    Week_Reported: 41,
    County: "Fresno",
    id: 6019,
    Positive_Cases: 1,
    Coordinates: [
      36.247025,
      -120.381432
    ]
  },
  {
    Year: 2006,
    Week_Reported: 45,
    County: "Fresno",
    id: 6019,
    Positive_Cases: 1,
    Coordinates: [
      36.247025,
      -120.381432
    ]
  },
  {
    Year: 2006,
    Week_Reported: 46,
    County: "Fresno",
    id: 6019,
    Positive_Cases: 1,
    Coordinates: [
      36.247025,
      -120.381432
    ]
  },
  {
    Year: 2007,
    Week_Reported: 30,
    County: "Fresno",
    id: 6019,
    Positive_Cases: 2,
    Coordinates: [
      36.247025,
      -120.381432
    ]
  },
  {
    Year: 2007,
    Week_Reported: 31,
    County: "Fresno",
    id: 6019,
    Positive_Cases: 3,
    Coordinates: [
      36.247025,
      -120.381432
    ]
  },
  {
    Year: 2007,
    Week_Reported: 32,
    County: "Fresno",
    id: 6019,
    Positive_Cases: 2,
    Coordinates: [
      36.247025,
      -120.381432
    ]
  },
  {
    Year: 2007,
    Week_Reported: 33,
    County: "Fresno",
    id: 6019,
    Positive_Cases: 1,
    Coordinates: [
      36.247025,
      -120.381432
    ]
  },
  {
    Year: 2007,
    Week_Reported: 34,
    County: "Fresno",
    id: 6019,
    Positive_Cases: 1,
    Coordinates: [
      36.247025,
      -120.381432
    ]
  },
  {
    Year: 2007,
    Week_Reported: 35,
    County: "Fresno",
    id: 6019,
    Positive_Cases: 1,
    Coordinates: [
      36.247025,
      -120.381432
    ]
  },
  {
    Year: 2007,
    Week_Reported: 37,
    County: "Fresno",
    id: 6019,
    Positive_Cases: 1,
    Coordinates: [
      36.247025,
      -120.381432
    ]
  },
  {
    Year: 2007,
    Week_Reported: 38,
    County: "Fresno",
    id: 6019,
    Positive_Cases: 1,
    Coordinates: [
      36.247025,
      -120.381432
    ]
  },
  {
    Year: 2007,
    Week_Reported: 39,
    County: "Fresno",
    id: 6019,
    Positive_Cases: 2,
    Coordinates: [
      36.247025,
      -120.381432
    ]
  },
  {
    Year: 2007,
    Week_Reported: 43,
    County: "Fresno",
    id: 6019,
    Positive_Cases: 2,
    Coordinates: [
      36.247025,
      -120.381432
    ]
  },
  {
    Year: 2007,
    Week_Reported: 45,
    County: "Fresno",
    id: 6019,
    Positive_Cases: 1,
    Coordinates: [
      36.247025,
      -120.381432
    ]
  },
  {
    Year: 2008,
    Week_Reported: 30,
    County: "Fresno",
    id: 6019,
    Positive_Cases: 1,
    Coordinates: [
      36.247025,
      -120.381432
    ]
  },
  {
    Year: 2008,
    Week_Reported: 44,
    County: "Fresno",
    id: 6019,
    Positive_Cases: 1,
    Coordinates: [
      36.247025,
      -120.381432
    ]
  },
  {
    Year: 2008,
    Week_Reported: 45,
    County: "Fresno",
    id: 6019,
    Positive_Cases: 1,
    Coordinates: [
      36.247025,
      -120.381432
    ]
  },
  {
    Year: 2009,
    Week_Reported: 32,
    County: "Fresno",
    id: 6019,
    Positive_Cases: 1,
    Coordinates: [
      36.247025,
      -120.381432
    ]
  },
  {
    Year: 2009,
    Week_Reported: 34,
    County: "Fresno",
    id: 6019,
    Positive_Cases: 2,
    Coordinates: [
      36.247025,
      -120.381432
    ]
  },
  {
    Year: 2009,
    Week_Reported: 35,
    County: "Fresno",
    id: 6019,
    Positive_Cases: 2,
    Coordinates: [
      36.247025,
      -120.381432
    ]
  },
  {
    Year: 2009,
    Week_Reported: 37,
    County: "Fresno",
    id: 6019,
    Positive_Cases: 2,
    Coordinates: [
      36.247025,
      -120.381432
    ]
  },
  {
    Year: 2009,
    Week_Reported: 38,
    County: "Fresno",
    id: 6019,
    Positive_Cases: 2,
    Coordinates: [
      36.247025,
      -120.381432
    ]
  },
  {
    Year: 2009,
    Week_Reported: 39,
    County: "Fresno",
    id: 6019,
    Positive_Cases: 3,
    Coordinates: [
      36.247025,
      -120.381432
    ]
  },
  {
    Year: 2009,
    Week_Reported: 40,
    County: "Fresno",
    id: 6019,
    Positive_Cases: 1,
    Coordinates: [
      36.247025,
      -120.381432
    ]
  },
  {
    Year: 2010,
    Week_Reported: 30,
    County: "Fresno",
    id: 6019,
    Positive_Cases: 2,
    Coordinates: [
      36.247025,
      -120.381432
    ]
  },
  {
    Year: 2010,
    Week_Reported: 33,
    County: "Fresno",
    id: 6019,
    Positive_Cases: 2,
    Coordinates: [
      36.247025,
      -120.381432
    ]
  },
  {
    Year: 2010,
    Week_Reported: 34,
    County: "Fresno",
    id: 6019,
    Positive_Cases: 4,
    Coordinates: [
      36.247025,
      -120.381432
    ]
  },
  {
    Year: 2010,
    Week_Reported: 35,
    County: "Fresno",
    id: 6019,
    Positive_Cases: 3,
    Coordinates: [
      36.247025,
      -120.381432
    ]
  },
  {
    Year: 2010,
    Week_Reported: 37,
    County: "Fresno",
    id: 6019,
    Positive_Cases: 5,
    Coordinates: [
      36.247025,
      -120.381432
    ]
  },
  {
    Year: 2010,
    Week_Reported: 38,
    County: "Fresno",
    id: 6019,
    Positive_Cases: 1,
    Coordinates: [
      36.247025,
      -120.381432
    ]
  },
  {
    Year: 2010,
    Week_Reported: 39,
    County: "Fresno",
    id: 6019,
    Positive_Cases: 3,
    Coordinates: [
      36.247025,
      -120.381432
    ]
  },
  {
    Year: 2010,
    Week_Reported: 40,
    County: "Fresno",
    id: 6019,
    Positive_Cases: 1,
    Coordinates: [
      36.247025,
      -120.381432
    ]
  },
  {
    Year: 2010,
    Week_Reported: 47,
    County: "Fresno",
    id: 6019,
    Positive_Cases: 1,
    Coordinates: [
      36.247025,
      -120.381432
    ]
  },
  {
    Year: 2010,
    Week_Reported: 53,
    County: "Fresno",
    id: 6019,
    Positive_Cases: 1,
    Coordinates: [
      36.247025,
      -120.381432
    ]
  },
  {
    Year: 2011,
    Week_Reported: 31,
    County: "Fresno",
    id: 6019,
    Positive_Cases: 2,
    Coordinates: [
      36.247025,
      -120.381432
    ]
  },
  {
    Year: 2011,
    Week_Reported: 33,
    County: "Fresno",
    id: 6019,
    Positive_Cases: 1,
    Coordinates: [
      36.247025,
      -120.381432
    ]
  },
  {
    Year: 2011,
    Week_Reported: 35,
    County: "Fresno",
    id: 6019,
    Positive_Cases: 1,
    Coordinates: [
      36.247025,
      -120.381432
    ]
  },
  {
    Year: 2011,
    Week_Reported: 37,
    County: "Fresno",
    id: 6019,
    Positive_Cases: 1,
    Coordinates: [
      36.247025,
      -120.381432
    ]
  },
  {
    Year: 2011,
    Week_Reported: 41,
    County: "Fresno",
    id: 6019,
    Positive_Cases: 2,
    Coordinates: [
      36.247025,
      -120.381432
    ]
  },
  {
    Year: 2011,
    Week_Reported: 44,
    County: "Fresno",
    id: 6019,
    Positive_Cases: 1,
    Coordinates: [
      36.247025,
      -120.381432
    ]
  },
  {
    Year: 2011,
    Week_Reported: 45,
    County: "Fresno",
    id: 6019,
    Positive_Cases: 1,
    Coordinates: [
      36.247025,
      -120.381432
    ]
  },
  {
    Year: 2012,
    Week_Reported: 29,
    County: "Fresno",
    id: 6019,
    Positive_Cases: 1,
    Coordinates: [
      36.247025,
      -120.381432
    ]
  },
  {
    Year: 2012,
    Week_Reported: 32,
    County: "Fresno",
    id: 6019,
    Positive_Cases: 3,
    Coordinates: [
      36.247025,
      -120.381432
    ]
  },
  {
    Year: 2012,
    Week_Reported: 34,
    County: "Fresno",
    id: 6019,
    Positive_Cases: 2,
    Coordinates: [
      36.247025,
      -120.381432
    ]
  },
  {
    Year: 2012,
    Week_Reported: 35,
    County: "Fresno",
    id: 6019,
    Positive_Cases: 1,
    Coordinates: [
      36.247025,
      -120.381432
    ]
  },
  {
    Year: 2012,
    Week_Reported: 36,
    County: "Fresno",
    id: 6019,
    Positive_Cases: 3,
    Coordinates: [
      36.247025,
      -120.381432
    ]
  },
  {
    Year: 2012,
    Week_Reported: 37,
    County: "Fresno",
    id: 6019,
    Positive_Cases: 3,
    Coordinates: [
      36.247025,
      -120.381432
    ]
  },
  {
    Year: 2012,
    Week_Reported: 38,
    County: "Fresno",
    id: 6019,
    Positive_Cases: 1,
    Coordinates: [
      36.247025,
      -120.381432
    ]
  },
  {
    Year: 2012,
    Week_Reported: 40,
    County: "Fresno",
    id: 6019,
    Positive_Cases: 2,
    Coordinates: [
      36.247025,
      -120.381432
    ]
  },
  {
    Year: 2012,
    Week_Reported: 42,
    County: "Fresno",
    id: 6019,
    Positive_Cases: 2,
    Coordinates: [
      36.247025,
      -120.381432
    ]
  },
  {
    Year: 2012,
    Week_Reported: 43,
    County: "Fresno",
    id: 6019,
    Positive_Cases: 4,
    Coordinates: [
      36.247025,
      -120.381432
    ]
  },
  {
    Year: 2012,
    Week_Reported: 46,
    County: "Fresno",
    id: 6019,
    Positive_Cases: 1,
    Coordinates: [
      36.247025,
      -120.381432
    ]
  },
  {
    Year: 2012,
    Week_Reported: 50,
    County: "Fresno",
    id: 6019,
    Positive_Cases: 1,
    Coordinates: [
      36.247025,
      -120.381432
    ]
  },
  {
    Year: 2013,
    Week_Reported: 32,
    County: "Fresno",
    id: 6019,
    Positive_Cases: 2,
    Coordinates: [
      36.247025,
      -120.381432
    ]
  },
  {
    Year: 2013,
    Week_Reported: 36,
    County: "Fresno",
    id: 6019,
    Positive_Cases: 1,
    Coordinates: [
      36.247025,
      -120.381432
    ]
  },
  {
    Year: 2013,
    Week_Reported: 41,
    County: "Fresno",
    id: 6019,
    Positive_Cases: 2,
    Coordinates: [
      36.247025,
      -120.381432
    ]
  },
  {
    Year: 2013,
    Week_Reported: 44,
    County: "Fresno",
    id: 6019,
    Positive_Cases: 1,
    Coordinates: [
      36.247025,
      -120.381432
    ]
  },
  {
    Year: 2013,
    Week_Reported: 53,
    County: "Fresno",
    id: 6019,
    Positive_Cases: 1,
    Coordinates: [
      36.247025,
      -120.381432
    ]
  },
  {
    Year: 2014,
    Week_Reported: 28,
    County: "Fresno",
    id: 6019,
    Positive_Cases: 2,
    Coordinates: [
      36.247025,
      -120.381432
    ]
  },
  {
    Year: 2014,
    Week_Reported: 29,
    County: "Fresno",
    id: 6019,
    Positive_Cases: 2,
    Coordinates: [
      36.247025,
      -120.381432
    ]
  },
  {
    Year: 2014,
    Week_Reported: 30,
    County: "Fresno",
    id: 6019,
    Positive_Cases: 1,
    Coordinates: [
      36.247025,
      -120.381432
    ]
  },
  {
    Year: 2014,
    Week_Reported: 31,
    County: "Fresno",
    id: 6019,
    Positive_Cases: 5,
    Coordinates: [
      36.247025,
      -120.381432
    ]
  },
  {
    Year: 2014,
    Week_Reported: 32,
    County: "Fresno",
    id: 6019,
    Positive_Cases: 2,
    Coordinates: [
      36.247025,
      -120.381432
    ]
  },
  {
    Year: 2014,
    Week_Reported: 33,
    County: "Fresno",
    id: 6019,
    Positive_Cases: 5,
    Coordinates: [
      36.247025,
      -120.381432
    ]
  },
  {
    Year: 2014,
    Week_Reported: 34,
    County: "Fresno",
    id: 6019,
    Positive_Cases: 2,
    Coordinates: [
      36.247025,
      -120.381432
    ]
  },
  {
    Year: 2014,
    Week_Reported: 35,
    County: "Fresno",
    id: 6019,
    Positive_Cases: 5,
    Coordinates: [
      36.247025,
      -120.381432
    ]
  },
  {
    Year: 2014,
    Week_Reported: 36,
    County: "Fresno",
    id: 6019,
    Positive_Cases: 1,
    Coordinates: [
      36.247025,
      -120.381432
    ]
  },
  {
    Year: 2014,
    Week_Reported: 37,
    County: "Fresno",
    id: 6019,
    Positive_Cases: 2,
    Coordinates: [
      36.247025,
      -120.381432
    ]
  },
  {
    Year: 2014,
    Week_Reported: 38,
    County: "Fresno",
    id: 6019,
    Positive_Cases: 1,
    Coordinates: [
      36.247025,
      -120.381432
    ]
  },
  {
    Year: 2014,
    Week_Reported: 39,
    County: "Fresno",
    id: 6019,
    Positive_Cases: 3,
    Coordinates: [
      36.247025,
      -120.381432
    ]
  },
  {
    Year: 2014,
    Week_Reported: 41,
    County: "Fresno",
    id: 6019,
    Positive_Cases: 3,
    Coordinates: [
      36.247025,
      -120.381432
    ]
  },
  {
    Year: 2014,
    Week_Reported: 45,
    County: "Fresno",
    id: 6019,
    Positive_Cases: 1,
    Coordinates: [
      36.247025,
      -120.381432
    ]
  },
  {
    Year: 2014,
    Week_Reported: 46,
    County: "Fresno",
    id: 6019,
    Positive_Cases: 1,
    Coordinates: [
      36.247025,
      -120.381432
    ]
  },
  {
    Year: 2014,
    Week_Reported: 47,
    County: "Fresno",
    id: 6019,
    Positive_Cases: 2,
    Coordinates: [
      36.247025,
      -120.381432
    ]
  },
  {
    Year: 2014,
    Week_Reported: 48,
    County: "Fresno",
    id: 6019,
    Positive_Cases: 5,
    Coordinates: [
      36.247025,
      -120.381432
    ]
  },
  {
    Year: 2015,
    Week_Reported: 38,
    County: "Fresno",
    id: 6019,
    Positive_Cases: 3,
    Coordinates: [
      36.247025,
      -120.381432
    ]
  },
  {
    Year: 2015,
    Week_Reported: 39,
    County: "Fresno",
    id: 6019,
    Positive_Cases: 1,
    Coordinates: [
      36.247025,
      -120.381432
    ]
  },
  {
    Year: 2015,
    Week_Reported: 40,
    County: "Fresno",
    id: 6019,
    Positive_Cases: 2,
    Coordinates: [
      36.247025,
      -120.381432
    ]
  },
  {
    Year: 2015,
    Week_Reported: 41,
    County: "Fresno",
    id: 6019,
    Positive_Cases: 1,
    Coordinates: [
      36.247025,
      -120.381432
    ]
  },
  {
    Year: 2006,
    Week_Reported: 32,
    County: "Glenn",
    id: 6021,
    Positive_Cases: 2,
    Coordinates: [
      39.698298,
      -122.168928
    ]
  },
  {
    Year: 2006,
    Week_Reported: 34,
    County: "Glenn",
    id: 6021,
    Positive_Cases: 1,
    Coordinates: [
      39.698298,
      -122.168928
    ]
  },
  {
    Year: 2006,
    Week_Reported: 35,
    County: "Glenn",
    id: 6021,
    Positive_Cases: 3,
    Coordinates: [
      39.698298,
      -122.168928
    ]
  },
  {
    Year: 2006,
    Week_Reported: 36,
    County: "Glenn",
    id: 6021,
    Positive_Cases: 2,
    Coordinates: [
      39.698298,
      -122.168928
    ]
  },
  {
    Year: 2006,
    Week_Reported: 37,
    County: "Glenn",
    id: 6021,
    Positive_Cases: 1,
    Coordinates: [
      39.698298,
      -122.168928
    ]
  },
  {
    Year: 2006,
    Week_Reported: 39,
    County: "Glenn",
    id: 6021,
    Positive_Cases: 3,
    Coordinates: [
      39.698298,
      -122.168928
    ]
  },
  {
    Year: 2007,
    Week_Reported: 29,
    County: "Glenn",
    id: 6021,
    Positive_Cases: 1,
    Coordinates: [
      39.698298,
      -122.168928
    ]
  },
  {
    Year: 2007,
    Week_Reported: 31,
    County: "Glenn",
    id: 6021,
    Positive_Cases: 1,
    Coordinates: [
      39.698298,
      -122.168928
    ]
  },
  {
    Year: 2007,
    Week_Reported: 32,
    County: "Glenn",
    id: 6021,
    Positive_Cases: 2,
    Coordinates: [
      39.698298,
      -122.168928
    ]
  },
  {
    Year: 2007,
    Week_Reported: 34,
    County: "Glenn",
    id: 6021,
    Positive_Cases: 1,
    Coordinates: [
      39.698298,
      -122.168928
    ]
  },
  {
    Year: 2007,
    Week_Reported: 35,
    County: "Glenn",
    id: 6021,
    Positive_Cases: 2,
    Coordinates: [
      39.698298,
      -122.168928
    ]
  },
  {
    Year: 2008,
    Week_Reported: 53,
    County: "Glenn",
    id: 6021,
    Positive_Cases: 1,
    Coordinates: [
      39.698298,
      -122.168928
    ]
  },
  {
    Year: 2010,
    Week_Reported: 39,
    County: "Glenn",
    id: 6021,
    Positive_Cases: 2,
    Coordinates: [
      39.698298,
      -122.168928
    ]
  },
  {
    Year: 2011,
    Week_Reported: 36,
    County: "Glenn",
    id: 6021,
    Positive_Cases: 1,
    Coordinates: [
      39.698298,
      -122.168928
    ]
  },
  {
    Year: 2012,
    Week_Reported: 37,
    County: "Glenn",
    id: 6021,
    Positive_Cases: 2,
    Coordinates: [
      39.698298,
      -122.168928
    ]
  },
  {
    Year: 2012,
    Week_Reported: 38,
    County: "Glenn",
    id: 6021,
    Positive_Cases: 3,
    Coordinates: [
      39.698298,
      -122.168928
    ]
  },
  {
    Year: 2012,
    Week_Reported: 40,
    County: "Glenn",
    id: 6021,
    Positive_Cases: 1,
    Coordinates: [
      39.698298,
      -122.168928
    ]
  },
  {
    Year: 2012,
    Week_Reported: 43,
    County: "Glenn",
    id: 6021,
    Positive_Cases: 1,
    Coordinates: [
      39.698298,
      -122.168928
    ]
  },
  {
    Year: 2013,
    Week_Reported: 30,
    County: "Glenn",
    id: 6021,
    Positive_Cases: 1,
    Coordinates: [
      39.698298,
      -122.168928
    ]
  },
  {
    Year: 2013,
    Week_Reported: 31,
    County: "Glenn",
    id: 6021,
    Positive_Cases: 1,
    Coordinates: [
      39.698298,
      -122.168928
    ]
  },
  {
    Year: 2013,
    Week_Reported: 33,
    County: "Glenn",
    id: 6021,
    Positive_Cases: 1,
    Coordinates: [
      39.698298,
      -122.168928
    ]
  },
  {
    Year: 2013,
    Week_Reported: 35,
    County: "Glenn",
    id: 6021,
    Positive_Cases: 1,
    Coordinates: [
      39.698298,
      -122.168928
    ]
  },
  {
    Year: 2013,
    Week_Reported: 36,
    County: "Glenn",
    id: 6021,
    Positive_Cases: 1,
    Coordinates: [
      39.698298,
      -122.168928
    ]
  },
  {
    Year: 2013,
    Week_Reported: 38,
    County: "Glenn",
    id: 6021,
    Positive_Cases: 1,
    Coordinates: [
      39.698298,
      -122.168928
    ]
  },
  {
    Year: 2013,
    Week_Reported: 39,
    County: "Glenn",
    id: 6021,
    Positive_Cases: 1,
    Coordinates: [
      39.698298,
      -122.168928
    ]
  },
  {
    Year: 2013,
    Week_Reported: 42,
    County: "Glenn",
    id: 6021,
    Positive_Cases: 1,
    Coordinates: [
      39.698298,
      -122.168928
    ]
  },
  {
    Year: 2013,
    Week_Reported: 45,
    County: "Glenn",
    id: 6021,
    Positive_Cases: 1,
    Coordinates: [
      39.698298,
      -122.168928
    ]
  },
  {
    Year: 2014,
    Week_Reported: 33,
    County: "Glenn",
    id: 6021,
    Positive_Cases: 1,
    Coordinates: [
      39.698298,
      -122.168928
    ]
  },
  {
    Year: 2014,
    Week_Reported: 34,
    County: "Glenn",
    id: 6021,
    Positive_Cases: 1,
    Coordinates: [
      39.698298,
      -122.168928
    ]
  },
  {
    Year: 2014,
    Week_Reported: 35,
    County: "Glenn",
    id: 6021,
    Positive_Cases: 3,
    Coordinates: [
      39.698298,
      -122.168928
    ]
  },
  {
    Year: 2014,
    Week_Reported: 36,
    County: "Glenn",
    id: 6021,
    Positive_Cases: 1,
    Coordinates: [
      39.698298,
      -122.168928
    ]
  },
  {
    Year: 2014,
    Week_Reported: 37,
    County: "Glenn",
    id: 6021,
    Positive_Cases: 2,
    Coordinates: [
      39.698298,
      -122.168928
    ]
  },
  {
    Year: 2014,
    Week_Reported: 38,
    County: "Glenn",
    id: 6021,
    Positive_Cases: 1,
    Coordinates: [
      39.698298,
      -122.168928
    ]
  },
  {
    Year: 2014,
    Week_Reported: 40,
    County: "Glenn",
    id: 6021,
    Positive_Cases: 1,
    Coordinates: [
      39.698298,
      -122.168928
    ]
  },
  {
    Year: 2015,
    Week_Reported: 30,
    County: "Glenn",
    id: 6021,
    Positive_Cases: 1,
    Coordinates: [
      39.698298,
      -122.168928
    ]
  },
  {
    Year: 2015,
    Week_Reported: 31,
    County: "Glenn",
    id: 6021,
    Positive_Cases: 3,
    Coordinates: [
      39.698298,
      -122.168928
    ]
  },
  {
    Year: 2015,
    Week_Reported: 32,
    County: "Glenn",
    id: 6021,
    Positive_Cases: 2,
    Coordinates: [
      39.698298,
      -122.168928
    ]
  },
  {
    Year: 2015,
    Week_Reported: 33,
    County: "Glenn",
    id: 6021,
    Positive_Cases: 2,
    Coordinates: [
      39.698298,
      -122.168928
    ]
  },
  {
    Year: 2015,
    Week_Reported: 34,
    County: "Glenn",
    id: 6021,
    Positive_Cases: 4,
    Coordinates: [
      39.698298,
      -122.168928
    ]
  },
  {
    Year: 2015,
    Week_Reported: 35,
    County: "Glenn",
    id: 6021,
    Positive_Cases: 5,
    Coordinates: [
      39.698298,
      -122.168928
    ]
  },
  {
    Year: 2015,
    Week_Reported: 39,
    County: "Glenn",
    id: 6021,
    Positive_Cases: 2,
    Coordinates: [
      39.698298,
      -122.168928
    ]
  },
  {
    Year: 2006,
    Week_Reported: 39,
    County: "Imperial",
    id: 6025,
    Positive_Cases: 1,
    Coordinates: [
      32.782242,
      -114.561905
    ]
  },
  {
    Year: 2007,
    Week_Reported: 30,
    County: "Imperial",
    id: 6025,
    Positive_Cases: 1,
    Coordinates: [
      32.782242,
      -114.561905
    ]
  },
  {
    Year: 2007,
    Week_Reported: 34,
    County: "Imperial",
    id: 6025,
    Positive_Cases: 1,
    Coordinates: [
      32.782242,
      -114.561905
    ]
  },
  {
    Year: 2007,
    Week_Reported: 36,
    County: "Imperial",
    id: 6025,
    Positive_Cases: 1,
    Coordinates: [
      32.782242,
      -114.561905
    ]
  },
  {
    Year: 2012,
    Week_Reported: 36,
    County: "Imperial",
    id: 6025,
    Positive_Cases: 1,
    Coordinates: [
      32.782242,
      -114.561905
    ]
  },
  {
    Year: 2014,
    Week_Reported: 35,
    County: "Imperial",
    id: 6025,
    Positive_Cases: 1,
    Coordinates: [
      32.782242,
      -114.561905
    ]
  },
  {
    Year: 2015,
    Week_Reported: 49,
    County: "Imperial",
    id: 6025,
    Positive_Cases: 1,
    Coordinates: [
      32.782242,
      -114.561905
    ]
  },
  {
    Year: 2006,
    Week_Reported: 25,
    County: "Kern",
    id: 6029,
    Positive_Cases: 1,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2006,
    Week_Reported: 29,
    County: "Kern",
    id: 6029,
    Positive_Cases: 1,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2006,
    Week_Reported: 30,
    County: "Kern",
    id: 6029,
    Positive_Cases: 8,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2006,
    Week_Reported: 31,
    County: "Kern",
    id: 6029,
    Positive_Cases: 1,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2006,
    Week_Reported: 32,
    County: "Kern",
    id: 6029,
    Positive_Cases: 6,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2006,
    Week_Reported: 33,
    County: "Kern",
    id: 6029,
    Positive_Cases: 3,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2006,
    Week_Reported: 34,
    County: "Kern",
    id: 6029,
    Positive_Cases: 5,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2006,
    Week_Reported: 35,
    County: "Kern",
    id: 6029,
    Positive_Cases: 5,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2006,
    Week_Reported: 36,
    County: "Kern",
    id: 6029,
    Positive_Cases: 2,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2006,
    Week_Reported: 37,
    County: "Kern",
    id: 6029,
    Positive_Cases: 6,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2006,
    Week_Reported: 38,
    County: "Kern",
    id: 6029,
    Positive_Cases: 3,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2006,
    Week_Reported: 39,
    County: "Kern",
    id: 6029,
    Positive_Cases: 4,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2006,
    Week_Reported: 40,
    County: "Kern",
    id: 6029,
    Positive_Cases: 2,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2006,
    Week_Reported: 42,
    County: "Kern",
    id: 6029,
    Positive_Cases: 1,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2006,
    Week_Reported: 46,
    County: "Kern",
    id: 6029,
    Positive_Cases: 1,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2007,
    Week_Reported: 16,
    County: "Kern",
    id: 6029,
    Positive_Cases: 1,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2007,
    Week_Reported: 25,
    County: "Kern",
    id: 6029,
    Positive_Cases: 1,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2007,
    Week_Reported: 27,
    County: "Kern",
    id: 6029,
    Positive_Cases: 2,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2007,
    Week_Reported: 28,
    County: "Kern",
    id: 6029,
    Positive_Cases: 5,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2007,
    Week_Reported: 29,
    County: "Kern",
    id: 6029,
    Positive_Cases: 14,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2007,
    Week_Reported: 30,
    County: "Kern",
    id: 6029,
    Positive_Cases: 6,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2007,
    Week_Reported: 31,
    County: "Kern",
    id: 6029,
    Positive_Cases: 10,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2007,
    Week_Reported: 32,
    County: "Kern",
    id: 6029,
    Positive_Cases: 10,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2007,
    Week_Reported: 33,
    County: "Kern",
    id: 6029,
    Positive_Cases: 16,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2007,
    Week_Reported: 34,
    County: "Kern",
    id: 6029,
    Positive_Cases: 14,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2007,
    Week_Reported: 35,
    County: "Kern",
    id: 6029,
    Positive_Cases: 13,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2007,
    Week_Reported: 36,
    County: "Kern",
    id: 6029,
    Positive_Cases: 9,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2007,
    Week_Reported: 37,
    County: "Kern",
    id: 6029,
    Positive_Cases: 7,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2007,
    Week_Reported: 38,
    County: "Kern",
    id: 6029,
    Positive_Cases: 8,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2007,
    Week_Reported: 39,
    County: "Kern",
    id: 6029,
    Positive_Cases: 2,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2007,
    Week_Reported: 40,
    County: "Kern",
    id: 6029,
    Positive_Cases: 8,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2007,
    Week_Reported: 41,
    County: "Kern",
    id: 6029,
    Positive_Cases: 6,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2007,
    Week_Reported: 42,
    County: "Kern",
    id: 6029,
    Positive_Cases: 2,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2007,
    Week_Reported: 44,
    County: "Kern",
    id: 6029,
    Positive_Cases: 2,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2007,
    Week_Reported: 45,
    County: "Kern",
    id: 6029,
    Positive_Cases: 2,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2007,
    Week_Reported: 46,
    County: "Kern",
    id: 6029,
    Positive_Cases: 1,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2007,
    Week_Reported: 49,
    County: "Kern",
    id: 6029,
    Positive_Cases: 1,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2008,
    Week_Reported: 45,
    County: "Kern",
    id: 6029,
    Positive_Cases: 1,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2008,
    Week_Reported: 50,
    County: "Kern",
    id: 6029,
    Positive_Cases: 1,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2009,
    Week_Reported: 31,
    County: "Kern",
    id: 6029,
    Positive_Cases: 2,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2009,
    Week_Reported: 32,
    County: "Kern",
    id: 6029,
    Positive_Cases: 1,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2009,
    Week_Reported: 34,
    County: "Kern",
    id: 6029,
    Positive_Cases: 1,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2009,
    Week_Reported: 35,
    County: "Kern",
    id: 6029,
    Positive_Cases: 4,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2009,
    Week_Reported: 36,
    County: "Kern",
    id: 6029,
    Positive_Cases: 2,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2009,
    Week_Reported: 37,
    County: "Kern",
    id: 6029,
    Positive_Cases: 1,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2009,
    Week_Reported: 40,
    County: "Kern",
    id: 6029,
    Positive_Cases: 1,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2009,
    Week_Reported: 41,
    County: "Kern",
    id: 6029,
    Positive_Cases: 3,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2009,
    Week_Reported: 42,
    County: "Kern",
    id: 6029,
    Positive_Cases: 1,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2009,
    Week_Reported: 44,
    County: "Kern",
    id: 6029,
    Positive_Cases: 2,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2009,
    Week_Reported: 50,
    County: "Kern",
    id: 6029,
    Positive_Cases: 1,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2010,
    Week_Reported: 29,
    County: "Kern",
    id: 6029,
    Positive_Cases: 1,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2010,
    Week_Reported: 32,
    County: "Kern",
    id: 6029,
    Positive_Cases: 1,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2010,
    Week_Reported: 36,
    County: "Kern",
    id: 6029,
    Positive_Cases: 1,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2010,
    Week_Reported: 38,
    County: "Kern",
    id: 6029,
    Positive_Cases: 3,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2010,
    Week_Reported: 39,
    County: "Kern",
    id: 6029,
    Positive_Cases: 1,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2010,
    Week_Reported: 42,
    County: "Kern",
    id: 6029,
    Positive_Cases: 4,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2010,
    Week_Reported: 43,
    County: "Kern",
    id: 6029,
    Positive_Cases: 1,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2010,
    Week_Reported: 44,
    County: "Kern",
    id: 6029,
    Positive_Cases: 1,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2010,
    Week_Reported: 52,
    County: "Kern",
    id: 6029,
    Positive_Cases: 1,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2010,
    Week_Reported: 53,
    County: "Kern",
    id: 6029,
    Positive_Cases: 1,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2011,
    Week_Reported: 34,
    County: "Kern",
    id: 6029,
    Positive_Cases: 1,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2011,
    Week_Reported: 36,
    County: "Kern",
    id: 6029,
    Positive_Cases: 3,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2011,
    Week_Reported: 37,
    County: "Kern",
    id: 6029,
    Positive_Cases: 1,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2011,
    Week_Reported: 38,
    County: "Kern",
    id: 6029,
    Positive_Cases: 4,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2011,
    Week_Reported: 39,
    County: "Kern",
    id: 6029,
    Positive_Cases: 1,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2011,
    Week_Reported: 40,
    County: "Kern",
    id: 6029,
    Positive_Cases: 3,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2011,
    Week_Reported: 42,
    County: "Kern",
    id: 6029,
    Positive_Cases: 1,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2011,
    Week_Reported: 43,
    County: "Kern",
    id: 6029,
    Positive_Cases: 1,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2011,
    Week_Reported: 44,
    County: "Kern",
    id: 6029,
    Positive_Cases: 2,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2011,
    Week_Reported: 46,
    County: "Kern",
    id: 6029,
    Positive_Cases: 1,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2012,
    Week_Reported: 25,
    County: "Kern",
    id: 6029,
    Positive_Cases: 1,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2012,
    Week_Reported: 28,
    County: "Kern",
    id: 6029,
    Positive_Cases: 1,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2012,
    Week_Reported: 31,
    County: "Kern",
    id: 6029,
    Positive_Cases: 1,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2012,
    Week_Reported: 32,
    County: "Kern",
    id: 6029,
    Positive_Cases: 1,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2012,
    Week_Reported: 33,
    County: "Kern",
    id: 6029,
    Positive_Cases: 2,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2012,
    Week_Reported: 34,
    County: "Kern",
    id: 6029,
    Positive_Cases: 1,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2012,
    Week_Reported: 35,
    County: "Kern",
    id: 6029,
    Positive_Cases: 2,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2012,
    Week_Reported: 36,
    County: "Kern",
    id: 6029,
    Positive_Cases: 1,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2012,
    Week_Reported: 37,
    County: "Kern",
    id: 6029,
    Positive_Cases: 5,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2012,
    Week_Reported: 39,
    County: "Kern",
    id: 6029,
    Positive_Cases: 5,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2012,
    Week_Reported: 40,
    County: "Kern",
    id: 6029,
    Positive_Cases: 1,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2012,
    Week_Reported: 41,
    County: "Kern",
    id: 6029,
    Positive_Cases: 1,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2012,
    Week_Reported: 42,
    County: "Kern",
    id: 6029,
    Positive_Cases: 3,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2013,
    Week_Reported: 33,
    County: "Kern",
    id: 6029,
    Positive_Cases: 2,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2013,
    Week_Reported: 34,
    County: "Kern",
    id: 6029,
    Positive_Cases: 2,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2013,
    Week_Reported: 35,
    County: "Kern",
    id: 6029,
    Positive_Cases: 2,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2013,
    Week_Reported: 36,
    County: "Kern",
    id: 6029,
    Positive_Cases: 2,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2013,
    Week_Reported: 37,
    County: "Kern",
    id: 6029,
    Positive_Cases: 1,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2013,
    Week_Reported: 39,
    County: "Kern",
    id: 6029,
    Positive_Cases: 1,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2013,
    Week_Reported: 40,
    County: "Kern",
    id: 6029,
    Positive_Cases: 2,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2013,
    Week_Reported: 41,
    County: "Kern",
    id: 6029,
    Positive_Cases: 4,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2013,
    Week_Reported: 42,
    County: "Kern",
    id: 6029,
    Positive_Cases: 2,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2013,
    Week_Reported: 43,
    County: "Kern",
    id: 6029,
    Positive_Cases: 2,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2013,
    Week_Reported: 44,
    County: "Kern",
    id: 6029,
    Positive_Cases: 1,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2013,
    Week_Reported: 46,
    County: "Kern",
    id: 6029,
    Positive_Cases: 1,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2013,
    Week_Reported: 47,
    County: "Kern",
    id: 6029,
    Positive_Cases: 2,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2013,
    Week_Reported: 50,
    County: "Kern",
    id: 6029,
    Positive_Cases: 1,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2014,
    Week_Reported: 32,
    County: "Kern",
    id: 6029,
    Positive_Cases: 2,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2014,
    Week_Reported: 36,
    County: "Kern",
    id: 6029,
    Positive_Cases: 1,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2014,
    Week_Reported: 38,
    County: "Kern",
    id: 6029,
    Positive_Cases: 1,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2014,
    Week_Reported: 39,
    County: "Kern",
    id: 6029,
    Positive_Cases: 2,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2014,
    Week_Reported: 42,
    County: "Kern",
    id: 6029,
    Positive_Cases: 1,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2014,
    Week_Reported: 43,
    County: "Kern",
    id: 6029,
    Positive_Cases: 1,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2014,
    Week_Reported: 45,
    County: "Kern",
    id: 6029,
    Positive_Cases: 2,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2014,
    Week_Reported: 48,
    County: "Kern",
    id: 6029,
    Positive_Cases: 1,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2015,
    Week_Reported: 32,
    County: "Kern",
    id: 6029,
    Positive_Cases: 2,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2015,
    Week_Reported: 34,
    County: "Kern",
    id: 6029,
    Positive_Cases: 1,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2015,
    Week_Reported: 37,
    County: "Kern",
    id: 6029,
    Positive_Cases: 1,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2015,
    Week_Reported: 38,
    County: "Kern",
    id: 6029,
    Positive_Cases: 1,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2015,
    Week_Reported: 39,
    County: "Kern",
    id: 6029,
    Positive_Cases: 2,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2015,
    Week_Reported: 40,
    County: "Kern",
    id: 6029,
    Positive_Cases: 1,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2015,
    Week_Reported: 41,
    County: "Kern",
    id: 6029,
    Positive_Cases: 2,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2015,
    Week_Reported: 43,
    County: "Kern",
    id: 6029,
    Positive_Cases: 1,
    Coordinates: [
      35.311064,
      -118.659604
    ]
  },
  {
    Year: 2006,
    Week_Reported: 33,
    County: "Kings",
    id: 6031,
    Positive_Cases: 1,
    Coordinates: [
      40.694481,
      -73.989319
    ]
  },
  {
    Year: 2007,
    Week_Reported: 31,
    County: "Kings",
    id: 6031,
    Positive_Cases: 1,
    Coordinates: [
      40.694481,
      -73.989319
    ]
  },
  {
    Year: 2007,
    Week_Reported: 33,
    County: "Kings",
    id: 6031,
    Positive_Cases: 1,
    Coordinates: [
      40.694481,
      -73.989319
    ]
  },
  {
    Year: 2007,
    Week_Reported: 36,
    County: "Kings",
    id: 6031,
    Positive_Cases: 1,
    Coordinates: [
      40.694481,
      -73.989319
    ]
  },
  {
    Year: 2007,
    Week_Reported: 37,
    County: "Kings",
    id: 6031,
    Positive_Cases: 2,
    Coordinates: [
      40.694481,
      -73.989319
    ]
  },
  {
    Year: 2007,
    Week_Reported: 40,
    County: "Kings",
    id: 6031,
    Positive_Cases: 2,
    Coordinates: [
      40.694481,
      -73.989319
    ]
  },
  {
    Year: 2008,
    Week_Reported: 39,
    County: "Kings",
    id: 6031,
    Positive_Cases: 1,
    Coordinates: [
      40.694481,
      -73.989319
    ]
  },
  {
    Year: 2008,
    Week_Reported: 51,
    County: "Kings",
    id: 6031,
    Positive_Cases: 1,
    Coordinates: [
      40.694481,
      -73.989319
    ]
  },
  {
    Year: 2009,
    Week_Reported: 32,
    County: "Kings",
    id: 6031,
    Positive_Cases: 1,
    Coordinates: [
      40.694481,
      -73.989319
    ]
  },
  {
    Year: 2009,
    Week_Reported: 37,
    County: "Kings",
    id: 6031,
    Positive_Cases: 1,
    Coordinates: [
      40.694481,
      -73.989319
    ]
  },
  {
    Year: 2009,
    Week_Reported: 38,
    County: "Kings",
    id: 6031,
    Positive_Cases: 1,
    Coordinates: [
      40.694481,
      -73.989319
    ]
  },
  {
    Year: 2010,
    Week_Reported: 43,
    County: "Kings",
    id: 6031,
    Positive_Cases: 1,
    Coordinates: [
      40.694481,
      -73.989319
    ]
  },
  {
    Year: 2011,
    Week_Reported: 52,
    County: "Kings",
    id: 6031,
    Positive_Cases: 1,
    Coordinates: [
      40.694481,
      -73.989319
    ]
  },
  {
    Year: 2012,
    Week_Reported: 40,
    County: "Kings",
    id: 6031,
    Positive_Cases: 2,
    Coordinates: [
      40.694481,
      -73.989319
    ]
  },
  {
    Year: 2012,
    Week_Reported: 48,
    County: "Kings",
    id: 6031,
    Positive_Cases: 1,
    Coordinates: [
      40.694481,
      -73.989319
    ]
  },
  {
    Year: 2013,
    Week_Reported: 44,
    County: "Kings",
    id: 6031,
    Positive_Cases: 1,
    Coordinates: [
      40.694481,
      -73.989319
    ]
  },
  {
    Year: 2014,
    Week_Reported: 36,
    County: "Kings",
    id: 6031,
    Positive_Cases: 2,
    Coordinates: [
      40.694481,
      -73.989319
    ]
  },
  {
    Year: 2014,
    Week_Reported: 40,
    County: "Kings",
    id: 6031,
    Positive_Cases: 1,
    Coordinates: [
      40.694481,
      -73.989319
    ]
  },
  {
    Year: 2014,
    Week_Reported: 52,
    County: "Kings",
    id: 6031,
    Positive_Cases: 1,
    Coordinates: [
      40.694481,
      -73.989319
    ]
  },
  {
    Year: 2006,
    Week_Reported: 36,
    County: "Lake",
    id: 6033,
    Positive_Cases: 1,
    Coordinates: [
      29.174011,
      -81.575044
    ]
  },
  {
    Year: 2006,
    Week_Reported: 40,
    County: "Lake",
    id: 6033,
    Positive_Cases: 1,
    Coordinates: [
      29.174011,
      -81.575044
    ]
  },
  {
    Year: 2012,
    Week_Reported: 45,
    County: "Lake",
    id: 6033,
    Positive_Cases: 1,
    Coordinates: [
      29.174011,
      -81.575044
    ]
  },
  {
    Year: 2014,
    Week_Reported: 36,
    County: "Lake",
    id: 6033,
    Positive_Cases: 1,
    Coordinates: [
      29.174011,
      -81.575044
    ]
  },
  {
    Year: 2015,
    Week_Reported: 33,
    County: "Lake",
    id: 6033,
    Positive_Cases: 1,
    Coordinates: [
      29.174011,
      -81.575044
    ]
  },
  {
    Year: 2015,
    Week_Reported: 36,
    County: "Lake",
    id: 6033,
    Positive_Cases: 1,
    Coordinates: [
      29.174011,
      -81.575044
    ]
  },
  {
    Year: 2006,
    Week_Reported: 32,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 1,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2006,
    Week_Reported: 34,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 1,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2006,
    Week_Reported: 35,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 1,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2006,
    Week_Reported: 37,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 2,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2006,
    Week_Reported: 38,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 3,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2006,
    Week_Reported: 39,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 1,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2006,
    Week_Reported: 41,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 2,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2006,
    Week_Reported: 45,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 1,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2007,
    Week_Reported: 32,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 1,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2007,
    Week_Reported: 33,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 3,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2007,
    Week_Reported: 35,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 2,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2007,
    Week_Reported: 36,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 2,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2007,
    Week_Reported: 37,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 5,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2007,
    Week_Reported: 39,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 11,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2007,
    Week_Reported: 40,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 6,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2007,
    Week_Reported: 41,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 5,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2007,
    Week_Reported: 43,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 1,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2008,
    Week_Reported: 30,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 3,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2008,
    Week_Reported: 31,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 8,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2008,
    Week_Reported: 32,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 5,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2008,
    Week_Reported: 33,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 9,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2008,
    Week_Reported: 35,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 8,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2008,
    Week_Reported: 36,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 6,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2008,
    Week_Reported: 37,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 14,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2008,
    Week_Reported: 38,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 21,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2008,
    Week_Reported: 39,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 14,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2008,
    Week_Reported: 41,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 23,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2008,
    Week_Reported: 43,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 8,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2008,
    Week_Reported: 44,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 4,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2008,
    Week_Reported: 45,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 13,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2008,
    Week_Reported: 46,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 5,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2008,
    Week_Reported: 47,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 4,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2008,
    Week_Reported: 49,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 4,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2008,
    Week_Reported: 51,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 1,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2008,
    Week_Reported: 53,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 6,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2009,
    Week_Reported: 32,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 2,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2009,
    Week_Reported: 34,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 3,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2009,
    Week_Reported: 36,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 2,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2009,
    Week_Reported: 37,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 2,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2009,
    Week_Reported: 39,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 2,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2009,
    Week_Reported: 40,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 2,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2009,
    Week_Reported: 41,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 1,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2009,
    Week_Reported: 42,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 4,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2009,
    Week_Reported: 43,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 1,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2009,
    Week_Reported: 45,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 1,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2010,
    Week_Reported: 43,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 1,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2010,
    Week_Reported: 45,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 1,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2010,
    Week_Reported: 47,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 1,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2010,
    Week_Reported: 49,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 1,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2011,
    Week_Reported: 32,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 2,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2011,
    Week_Reported: 33,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 1,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2011,
    Week_Reported: 34,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 3,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2011,
    Week_Reported: 35,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 2,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2011,
    Week_Reported: 36,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 2,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2011,
    Week_Reported: 37,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 5,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2011,
    Week_Reported: 38,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 8,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2011,
    Week_Reported: 39,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 12,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2011,
    Week_Reported: 40,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 8,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2011,
    Week_Reported: 41,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 3,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2011,
    Week_Reported: 42,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 3,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2011,
    Week_Reported: 43,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 2,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2011,
    Week_Reported: 44,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 2,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2011,
    Week_Reported: 46,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 3,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2011,
    Week_Reported: 48,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 2,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2012,
    Week_Reported: 29,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 1,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2012,
    Week_Reported: 33,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 1,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2012,
    Week_Reported: 34,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 2,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2012,
    Week_Reported: 36,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 3,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2012,
    Week_Reported: 37,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 5,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2012,
    Week_Reported: 38,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 9,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2012,
    Week_Reported: 39,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 9,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2012,
    Week_Reported: 40,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 16,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2012,
    Week_Reported: 41,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 18,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2012,
    Week_Reported: 42,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 13,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2012,
    Week_Reported: 43,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 14,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2012,
    Week_Reported: 44,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 13,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2012,
    Week_Reported: 45,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 14,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2012,
    Week_Reported: 46,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 13,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2012,
    Week_Reported: 47,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 6,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2012,
    Week_Reported: 48,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 1,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2012,
    Week_Reported: 49,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 6,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2012,
    Week_Reported: 50,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 7,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2012,
    Week_Reported: 51,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 5,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2012,
    Week_Reported: 52,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 7,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2013,
    Week_Reported: 30,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 2,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2013,
    Week_Reported: 31,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 5,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2013,
    Week_Reported: 33,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 8,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2013,
    Week_Reported: 34,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 12,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2013,
    Week_Reported: 35,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 8,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2013,
    Week_Reported: 36,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 8,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2013,
    Week_Reported: 37,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 11,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2013,
    Week_Reported: 38,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 8,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2013,
    Week_Reported: 39,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 9,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2013,
    Week_Reported: 40,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 8,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2013,
    Week_Reported: 41,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 10,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2013,
    Week_Reported: 42,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 21,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2013,
    Week_Reported: 43,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 11,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2013,
    Week_Reported: 44,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 9,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2013,
    Week_Reported: 45,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 8,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2013,
    Week_Reported: 46,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 5,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2013,
    Week_Reported: 47,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 3,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2013,
    Week_Reported: 48,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 2,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2013,
    Week_Reported: 50,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 2,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2013,
    Week_Reported: 51,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 8,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2014,
    Week_Reported: 32,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 3,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2014,
    Week_Reported: 33,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 4,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2014,
    Week_Reported: 34,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 9,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2014,
    Week_Reported: 35,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 11,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2014,
    Week_Reported: 36,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 5,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2014,
    Week_Reported: 37,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 20,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2014,
    Week_Reported: 38,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 18,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2014,
    Week_Reported: 39,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 19,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2014,
    Week_Reported: 40,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 16,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2014,
    Week_Reported: 41,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 29,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2014,
    Week_Reported: 42,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 24,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2014,
    Week_Reported: 43,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 25,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2014,
    Week_Reported: 44,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 18,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2014,
    Week_Reported: 45,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 20,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2014,
    Week_Reported: 46,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 10,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2014,
    Week_Reported: 47,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 3,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2014,
    Week_Reported: 49,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 13,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2014,
    Week_Reported: 50,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 2,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2014,
    Week_Reported: 51,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 1,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2014,
    Week_Reported: 52,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 3,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2015,
    Week_Reported: 30,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 1,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2015,
    Week_Reported: 35,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 2,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2015,
    Week_Reported: 36,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 1,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2015,
    Week_Reported: 37,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 8,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2015,
    Week_Reported: 38,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 12,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2015,
    Week_Reported: 39,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 10,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2015,
    Week_Reported: 40,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 15,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2015,
    Week_Reported: 41,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 20,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2015,
    Week_Reported: 42,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 12,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2015,
    Week_Reported: 43,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 22,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2015,
    Week_Reported: 44,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 16,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2015,
    Week_Reported: 45,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 29,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2015,
    Week_Reported: 46,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 15,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2015,
    Week_Reported: 47,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 25,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2015,
    Week_Reported: 49,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 30,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2015,
    Week_Reported: 50,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 15,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2015,
    Week_Reported: 52,
    County: "Los Angeles",
    id: 6037,
    Positive_Cases: 19,
    Coordinates: [
      33.973951,
      -118.248405
    ]
  },
  {
    Year: 2006,
    Week_Reported: 37,
    County: "Marin",
    id: 6041,
    Positive_Cases: 1,
    Coordinates: [
      37.970948,
      -122.504286
    ]
  },
  {
    Year: 2013,
    Week_Reported: 35,
    County: "Marin",
    id: 6041,
    Positive_Cases: 1,
    Coordinates: [
      37.970948,
      -122.504286
    ]
  },
  {
    Year: 2013,
    Week_Reported: 37,
    County: "Marin",
    id: 6041,
    Positive_Cases: 1,
    Coordinates: [
      37.970948,
      -122.504286
    ]
  },
  {
    Year: 2015,
    Week_Reported: 37,
    County: "Marin",
    id: 6041,
    Positive_Cases: 1,
    Coordinates: [
      37.970948,
      -122.504286
    ]
  },
  {
    Year: 2006,
    Week_Reported: 33,
    County: "Merced",
    id: 6047,
    Positive_Cases: 1,
    Coordinates: [
      37.073301,
      -120.623363
    ]
  },
  {
    Year: 2006,
    Week_Reported: 38,
    County: "Merced",
    id: 6047,
    Positive_Cases: 1,
    Coordinates: [
      37.073301,
      -120.623363
    ]
  },
  {
    Year: 2006,
    Week_Reported: 41,
    County: "Merced",
    id: 6047,
    Positive_Cases: 1,
    Coordinates: [
      37.073301,
      -120.623363
    ]
  },
  {
    Year: 2006,
    Week_Reported: 42,
    County: "Merced",
    id: 6047,
    Positive_Cases: 1,
    Coordinates: [
      37.073301,
      -120.623363
    ]
  },
  {
    Year: 2007,
    Week_Reported: 29,
    County: "Merced",
    id: 6047,
    Positive_Cases: 1,
    Coordinates: [
      37.073301,
      -120.623363
    ]
  },
  {
    Year: 2007,
    Week_Reported: 31,
    County: "Merced",
    id: 6047,
    Positive_Cases: 2,
    Coordinates: [
      37.073301,
      -120.623363
    ]
  },
  {
    Year: 2007,
    Week_Reported: 37,
    County: "Merced",
    id: 6047,
    Positive_Cases: 1,
    Coordinates: [
      37.073301,
      -120.623363
    ]
  },
  {
    Year: 2008,
    Week_Reported: 36,
    County: "Merced",
    id: 6047,
    Positive_Cases: 1,
    Coordinates: [
      37.073301,
      -120.623363
    ]
  },
  {
    Year: 2009,
    Week_Reported: 37,
    County: "Merced",
    id: 6047,
    Positive_Cases: 1,
    Coordinates: [
      37.073301,
      -120.623363
    ]
  },
  {
    Year: 2009,
    Week_Reported: 52,
    County: "Merced",
    id: 6047,
    Positive_Cases: 3,
    Coordinates: [
      37.073301,
      -120.623363
    ]
  },
  {
    Year: 2010,
    Week_Reported: 42,
    County: "Merced",
    id: 6047,
    Positive_Cases: 1,
    Coordinates: [
      37.073301,
      -120.623363
    ]
  },
  {
    Year: 2011,
    Week_Reported: 39,
    County: "Merced",
    id: 6047,
    Positive_Cases: 1,
    Coordinates: [
      37.073301,
      -120.623363
    ]
  },
  {
    Year: 2012,
    Week_Reported: 29,
    County: "Merced",
    id: 6047,
    Positive_Cases: 1,
    Coordinates: [
      37.073301,
      -120.623363
    ]
  },
  {
    Year: 2012,
    Week_Reported: 35,
    County: "Merced",
    id: 6047,
    Positive_Cases: 2,
    Coordinates: [
      37.073301,
      -120.623363
    ]
  },
  {
    Year: 2012,
    Week_Reported: 36,
    County: "Merced",
    id: 6047,
    Positive_Cases: 2,
    Coordinates: [
      37.073301,
      -120.623363
    ]
  },
  {
    Year: 2012,
    Week_Reported: 37,
    County: "Merced",
    id: 6047,
    Positive_Cases: 2,
    Coordinates: [
      37.073301,
      -120.623363
    ]
  },
  {
    Year: 2012,
    Week_Reported: 39,
    County: "Merced",
    id: 6047,
    Positive_Cases: 1,
    Coordinates: [
      37.073301,
      -120.623363
    ]
  },
  {
    Year: 2012,
    Week_Reported: 40,
    County: "Merced",
    id: 6047,
    Positive_Cases: 3,
    Coordinates: [
      37.073301,
      -120.623363
    ]
  },
  {
    Year: 2012,
    Week_Reported: 41,
    County: "Merced",
    id: 6047,
    Positive_Cases: 1,
    Coordinates: [
      37.073301,
      -120.623363
    ]
  },
  {
    Year: 2012,
    Week_Reported: 42,
    County: "Merced",
    id: 6047,
    Positive_Cases: 1,
    Coordinates: [
      37.073301,
      -120.623363
    ]
  },
  {
    Year: 2014,
    Week_Reported: 39,
    County: "Merced",
    id: 6047,
    Positive_Cases: 1,
    Coordinates: [
      37.073301,
      -120.623363
    ]
  },
  {
    Year: 2015,
    Week_Reported: 40,
    County: "Merced",
    id: 6047,
    Positive_Cases: 1,
    Coordinates: [
      37.073301,
      -120.623363
    ]
  },
  {
    Year: 2006,
    Week_Reported: 32,
    County: "Modoc",
    id: 6049,
    Positive_Cases: 1,
    Coordinates: [
      41.236677,
      -120.932949
    ]
  },
  {
    Year: 2006,
    Week_Reported: 37,
    County: "Modoc",
    id: 6049,
    Positive_Cases: 1,
    Coordinates: [
      41.236677,
      -120.932949
    ]
  },
  {
    Year: 2006,
    Week_Reported: 34,
    County: "Mono",
    id: 6051,
    Positive_Cases: 1,
    Coordinates: [
      37.496842,
      -118.624903
    ]
  },
  // {
  //   Year: 2006,
  //   Week_Reported: 39,
  //   County: "Napa",
  //   id: 6055,
  //   Positive_Cases: 1,
  //   Coordinates: [
  //     null,
  //     null
  //   ]
  // },
  // {
  //   Year: 2007,
  //   Week_Reported: 40,
  //   County: "Napa",
  //   id: 6055,
  //   Positive_Cases: 1,
  //   Coordinates: [
  //     null,
  //     null
  //   ]
  // },
  // {
  //   Year: 2013,
  //   Week_Reported: 35,
  //   County: "Napa",
  //   id: 6055,
  //   Positive_Cases: 1,
  //   Coordinates: [
  //     null,
  //     null
  //   ]
  // },
  {
    Year: 2006,
    Week_Reported: 35,
    County: "Nevada",
    id: 6057,
    Positive_Cases: 1,
    Coordinates: [
      33.70082,
      -93.294126
    ]
  },
  {
    Year: 2015,
    Week_Reported: 29,
    County: "Nevada",
    id: 6057,
    Positive_Cases: 1,
    Coordinates: [
      33.70082,
      -93.294126
    ]
  },
  {
    Year: 2015,
    Week_Reported: 33,
    County: "Nevada",
    id: 6057,
    Positive_Cases: 1,
    Coordinates: [
      33.70082,
      -93.294126
    ]
  },
  {
    Year: 2006,
    Week_Reported: 34,
    County: "Orange",
    id: 6059,
    Positive_Cases: 2,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2006,
    Week_Reported: 35,
    County: "Orange",
    id: 6059,
    Positive_Cases: 1,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2006,
    Week_Reported: 38,
    County: "Orange",
    id: 6059,
    Positive_Cases: 2,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2006,
    Week_Reported: 44,
    County: "Orange",
    id: 6059,
    Positive_Cases: 1,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2007,
    Week_Reported: 33,
    County: "Orange",
    id: 6059,
    Positive_Cases: 2,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2007,
    Week_Reported: 36,
    County: "Orange",
    id: 6059,
    Positive_Cases: 1,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2007,
    Week_Reported: 39,
    County: "Orange",
    id: 6059,
    Positive_Cases: 4,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2007,
    Week_Reported: 40,
    County: "Orange",
    id: 6059,
    Positive_Cases: 1,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2007,
    Week_Reported: 44,
    County: "Orange",
    id: 6059,
    Positive_Cases: 1,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2008,
    Week_Reported: 29,
    County: "Orange",
    id: 6059,
    Positive_Cases: 2,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2008,
    Week_Reported: 31,
    County: "Orange",
    id: 6059,
    Positive_Cases: 7,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2008,
    Week_Reported: 32,
    County: "Orange",
    id: 6059,
    Positive_Cases: 3,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2008,
    Week_Reported: 33,
    County: "Orange",
    id: 6059,
    Positive_Cases: 2,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2008,
    Week_Reported: 34,
    County: "Orange",
    id: 6059,
    Positive_Cases: 7,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2008,
    Week_Reported: 35,
    County: "Orange",
    id: 6059,
    Positive_Cases: 13,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2008,
    Week_Reported: 36,
    County: "Orange",
    id: 6059,
    Positive_Cases: 7,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2008,
    Week_Reported: 37,
    County: "Orange",
    id: 6059,
    Positive_Cases: 4,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2008,
    Week_Reported: 39,
    County: "Orange",
    id: 6059,
    Positive_Cases: 8,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2008,
    Week_Reported: 40,
    County: "Orange",
    id: 6059,
    Positive_Cases: 7,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2008,
    Week_Reported: 44,
    County: "Orange",
    id: 6059,
    Positive_Cases: 1,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2008,
    Week_Reported: 45,
    County: "Orange",
    id: 6059,
    Positive_Cases: 2,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2008,
    Week_Reported: 46,
    County: "Orange",
    id: 6059,
    Positive_Cases: 2,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2008,
    Week_Reported: 48,
    County: "Orange",
    id: 6059,
    Positive_Cases: 1,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2008,
    Week_Reported: 49,
    County: "Orange",
    id: 6059,
    Positive_Cases: 2,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2008,
    Week_Reported: 51,
    County: "Orange",
    id: 6059,
    Positive_Cases: 2,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2008,
    Week_Reported: 53,
    County: "Orange",
    id: 6059,
    Positive_Cases: 1,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2009,
    Week_Reported: 30,
    County: "Orange",
    id: 6059,
    Positive_Cases: 1,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2009,
    Week_Reported: 38,
    County: "Orange",
    id: 6059,
    Positive_Cases: 2,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2009,
    Week_Reported: 39,
    County: "Orange",
    id: 6059,
    Positive_Cases: 1,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2010,
    Week_Reported: 42,
    County: "Orange",
    id: 6059,
    Positive_Cases: 1,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2011,
    Week_Reported: 34,
    County: "Orange",
    id: 6059,
    Positive_Cases: 1,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2011,
    Week_Reported: 37,
    County: "Orange",
    id: 6059,
    Positive_Cases: 2,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2011,
    Week_Reported: 39,
    County: "Orange",
    id: 6059,
    Positive_Cases: 1,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2011,
    Week_Reported: 40,
    County: "Orange",
    id: 6059,
    Positive_Cases: 1,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2011,
    Week_Reported: 41,
    County: "Orange",
    id: 6059,
    Positive_Cases: 1,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2011,
    Week_Reported: 42,
    County: "Orange",
    id: 6059,
    Positive_Cases: 2,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2011,
    Week_Reported: 44,
    County: "Orange",
    id: 6059,
    Positive_Cases: 2,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2012,
    Week_Reported: 31,
    County: "Orange",
    id: 6059,
    Positive_Cases: 1,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2012,
    Week_Reported: 35,
    County: "Orange",
    id: 6059,
    Positive_Cases: 1,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2012,
    Week_Reported: 37,
    County: "Orange",
    id: 6059,
    Positive_Cases: 3,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2012,
    Week_Reported: 38,
    County: "Orange",
    id: 6059,
    Positive_Cases: 1,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2012,
    Week_Reported: 39,
    County: "Orange",
    id: 6059,
    Positive_Cases: 5,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2012,
    Week_Reported: 40,
    County: "Orange",
    id: 6059,
    Positive_Cases: 8,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2012,
    Week_Reported: 41,
    County: "Orange",
    id: 6059,
    Positive_Cases: 3,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2012,
    Week_Reported: 42,
    County: "Orange",
    id: 6059,
    Positive_Cases: 8,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2012,
    Week_Reported: 43,
    County: "Orange",
    id: 6059,
    Positive_Cases: 1,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2012,
    Week_Reported: 44,
    County: "Orange",
    id: 6059,
    Positive_Cases: 4,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2012,
    Week_Reported: 46,
    County: "Orange",
    id: 6059,
    Positive_Cases: 1,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2012,
    Week_Reported: 48,
    County: "Orange",
    id: 6059,
    Positive_Cases: 3,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2012,
    Week_Reported: 51,
    County: "Orange",
    id: 6059,
    Positive_Cases: 2,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2012,
    Week_Reported: 52,
    County: "Orange",
    id: 6059,
    Positive_Cases: 1,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2013,
    Week_Reported: 33,
    County: "Orange",
    id: 6059,
    Positive_Cases: 1,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2013,
    Week_Reported: 37,
    County: "Orange",
    id: 6059,
    Positive_Cases: 1,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2013,
    Week_Reported: 39,
    County: "Orange",
    id: 6059,
    Positive_Cases: 1,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2013,
    Week_Reported: 40,
    County: "Orange",
    id: 6059,
    Positive_Cases: 1,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2013,
    Week_Reported: 44,
    County: "Orange",
    id: 6059,
    Positive_Cases: 2,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2013,
    Week_Reported: 45,
    County: "Orange",
    id: 6059,
    Positive_Cases: 3,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2014,
    Week_Reported: 28,
    County: "Orange",
    id: 6059,
    Positive_Cases: 1,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2014,
    Week_Reported: 30,
    County: "Orange",
    id: 6059,
    Positive_Cases: 2,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2014,
    Week_Reported: 31,
    County: "Orange",
    id: 6059,
    Positive_Cases: 4,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2014,
    Week_Reported: 32,
    County: "Orange",
    id: 6059,
    Positive_Cases: 6,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2014,
    Week_Reported: 33,
    County: "Orange",
    id: 6059,
    Positive_Cases: 12,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2014,
    Week_Reported: 34,
    County: "Orange",
    id: 6059,
    Positive_Cases: 9,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2014,
    Week_Reported: 35,
    County: "Orange",
    id: 6059,
    Positive_Cases: 27,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2014,
    Week_Reported: 36,
    County: "Orange",
    id: 6059,
    Positive_Cases: 24,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2014,
    Week_Reported: 37,
    County: "Orange",
    id: 6059,
    Positive_Cases: 31,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2014,
    Week_Reported: 38,
    County: "Orange",
    id: 6059,
    Positive_Cases: 22,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2014,
    Week_Reported: 39,
    County: "Orange",
    id: 6059,
    Positive_Cases: 17,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2014,
    Week_Reported: 40,
    County: "Orange",
    id: 6059,
    Positive_Cases: 16,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2014,
    Week_Reported: 41,
    County: "Orange",
    id: 6059,
    Positive_Cases: 29,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2014,
    Week_Reported: 42,
    County: "Orange",
    id: 6059,
    Positive_Cases: 14,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2014,
    Week_Reported: 43,
    County: "Orange",
    id: 6059,
    Positive_Cases: 16,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2014,
    Week_Reported: 44,
    County: "Orange",
    id: 6059,
    Positive_Cases: 24,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2014,
    Week_Reported: 45,
    County: "Orange",
    id: 6059,
    Positive_Cases: 2,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2014,
    Week_Reported: 46,
    County: "Orange",
    id: 6059,
    Positive_Cases: 3,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2014,
    Week_Reported: 47,
    County: "Orange",
    id: 6059,
    Positive_Cases: 2,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2014,
    Week_Reported: 49,
    County: "Orange",
    id: 6059,
    Positive_Cases: 1,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2014,
    Week_Reported: 50,
    County: "Orange",
    id: 6059,
    Positive_Cases: 1,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2015,
    Week_Reported: 32,
    County: "Orange",
    id: 6059,
    Positive_Cases: 1,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2015,
    Week_Reported: 35,
    County: "Orange",
    id: 6059,
    Positive_Cases: 3,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2015,
    Week_Reported: 36,
    County: "Orange",
    id: 6059,
    Positive_Cases: 2,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2015,
    Week_Reported: 37,
    County: "Orange",
    id: 6059,
    Positive_Cases: 12,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2015,
    Week_Reported: 38,
    County: "Orange",
    id: 6059,
    Positive_Cases: 2,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2015,
    Week_Reported: 39,
    County: "Orange",
    id: 6059,
    Positive_Cases: 4,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2015,
    Week_Reported: 40,
    County: "Orange",
    id: 6059,
    Positive_Cases: 7,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2015,
    Week_Reported: 41,
    County: "Orange",
    id: 6059,
    Positive_Cases: 4,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2015,
    Week_Reported: 42,
    County: "Orange",
    id: 6059,
    Positive_Cases: 4,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2015,
    Week_Reported: 43,
    County: "Orange",
    id: 6059,
    Positive_Cases: 7,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2015,
    Week_Reported: 44,
    County: "Orange",
    id: 6059,
    Positive_Cases: 11,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2015,
    Week_Reported: 45,
    County: "Orange",
    id: 6059,
    Positive_Cases: 16,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2015,
    Week_Reported: 46,
    County: "Orange",
    id: 6059,
    Positive_Cases: 4,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2015,
    Week_Reported: 47,
    County: "Orange",
    id: 6059,
    Positive_Cases: 4,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2015,
    Week_Reported: 50,
    County: "Orange",
    id: 6059,
    Positive_Cases: 3,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2015,
    Week_Reported: 52,
    County: "Orange",
    id: 6059,
    Positive_Cases: 1,
    Coordinates: [
      44.004691,
      -72.15845
    ]
  },
  {
    Year: 2006,
    Week_Reported: 33,
    County: "Placer",
    id: 6061,
    Positive_Cases: 1,
    Coordinates: [
      39.014933,
      -121.07047
    ]
  },
  {
    Year: 2006,
    Week_Reported: 34,
    County: "Placer",
    id: 6061,
    Positive_Cases: 1,
    Coordinates: [
      39.014933,
      -121.07047
    ]
  },
  {
    Year: 2006,
    Week_Reported: 35,
    County: "Placer",
    id: 6061,
    Positive_Cases: 2,
    Coordinates: [
      39.014933,
      -121.07047
    ]
  },
  {
    Year: 2006,
    Week_Reported: 37,
    County: "Placer",
    id: 6061,
    Positive_Cases: 2,
    Coordinates: [
      39.014933,
      -121.07047
    ]
  },
  {
    Year: 2006,
    Week_Reported: 38,
    County: "Placer",
    id: 6061,
    Positive_Cases: 1,
    Coordinates: [
      39.014933,
      -121.07047
    ]
  },
  {
    Year: 2006,
    Week_Reported: 41,
    County: "Placer",
    id: 6061,
    Positive_Cases: 1,
    Coordinates: [
      39.014933,
      -121.07047
    ]
  },
  {
    Year: 2007,
    Week_Reported: 37,
    County: "Placer",
    id: 6061,
    Positive_Cases: 2,
    Coordinates: [
      39.014933,
      -121.07047
    ]
  },
  {
    Year: 2007,
    Week_Reported: 42,
    County: "Placer",
    id: 6061,
    Positive_Cases: 1,
    Coordinates: [
      39.014933,
      -121.07047
    ]
  },
  {
    Year: 2007,
    Week_Reported: 46,
    County: "Placer",
    id: 6061,
    Positive_Cases: 1,
    Coordinates: [
      39.014933,
      -121.07047
    ]
  },
  {
    Year: 2008,
    Week_Reported: 36,
    County: "Placer",
    id: 6061,
    Positive_Cases: 2,
    Coordinates: [
      39.014933,
      -121.07047
    ]
  },
  {
    Year: 2008,
    Week_Reported: 39,
    County: "Placer",
    id: 6061,
    Positive_Cases: 2,
    Coordinates: [
      39.014933,
      -121.07047
    ]
  },
  {
    Year: 2008,
    Week_Reported: 43,
    County: "Placer",
    id: 6061,
    Positive_Cases: 1,
    Coordinates: [
      39.014933,
      -121.07047
    ]
  },
  {
    Year: 2008,
    Week_Reported: 45,
    County: "Placer",
    id: 6061,
    Positive_Cases: 1,
    Coordinates: [
      39.014933,
      -121.07047
    ]
  },
  {
    Year: 2010,
    Week_Reported: 35,
    County: "Placer",
    id: 6061,
    Positive_Cases: 1,
    Coordinates: [
      39.014933,
      -121.07047
    ]
  },
  {
    Year: 2010,
    Week_Reported: 37,
    County: "Placer",
    id: 6061,
    Positive_Cases: 2,
    Coordinates: [
      39.014933,
      -121.07047
    ]
  },
  {
    Year: 2011,
    Week_Reported: 38,
    County: "Placer",
    id: 6061,
    Positive_Cases: 1,
    Coordinates: [
      39.014933,
      -121.07047
    ]
  },
  {
    Year: 2012,
    Week_Reported: 34,
    County: "Placer",
    id: 6061,
    Positive_Cases: 1,
    Coordinates: [
      39.014933,
      -121.07047
    ]
  },
  {
    Year: 2012,
    Week_Reported: 35,
    County: "Placer",
    id: 6061,
    Positive_Cases: 2,
    Coordinates: [
      39.014933,
      -121.07047
    ]
  },
  {
    Year: 2012,
    Week_Reported: 37,
    County: "Placer",
    id: 6061,
    Positive_Cases: 2,
    Coordinates: [
      39.014933,
      -121.07047
    ]
  },
  {
    Year: 2012,
    Week_Reported: 39,
    County: "Placer",
    id: 6061,
    Positive_Cases: 1,
    Coordinates: [
      39.014933,
      -121.07047
    ]
  },
  {
    Year: 2012,
    Week_Reported: 41,
    County: "Placer",
    id: 6061,
    Positive_Cases: 3,
    Coordinates: [
      39.014933,
      -121.07047
    ]
  },
  {
    Year: 2012,
    Week_Reported: 42,
    County: "Placer",
    id: 6061,
    Positive_Cases: 1,
    Coordinates: [
      39.014933,
      -121.07047
    ]
  },
  {
    Year: 2012,
    Week_Reported: 44,
    County: "Placer",
    id: 6061,
    Positive_Cases: 2,
    Coordinates: [
      39.014933,
      -121.07047
    ]
  },
  {
    Year: 2013,
    Week_Reported: 34,
    County: "Placer",
    id: 6061,
    Positive_Cases: 1,
    Coordinates: [
      39.014933,
      -121.07047
    ]
  },
  {
    Year: 2013,
    Week_Reported: 38,
    County: "Placer",
    id: 6061,
    Positive_Cases: 3,
    Coordinates: [
      39.014933,
      -121.07047
    ]
  },
  {
    Year: 2013,
    Week_Reported: 41,
    County: "Placer",
    id: 6061,
    Positive_Cases: 1,
    Coordinates: [
      39.014933,
      -121.07047
    ]
  },
  {
    Year: 2013,
    Week_Reported: 53,
    County: "Placer",
    id: 6061,
    Positive_Cases: 1,
    Coordinates: [
      39.014933,
      -121.07047
    ]
  },
  {
    Year: 2014,
    Week_Reported: 35,
    County: "Placer",
    id: 6061,
    Positive_Cases: 1,
    Coordinates: [
      39.014933,
      -121.07047
    ]
  },
  {
    Year: 2014,
    Week_Reported: 37,
    County: "Placer",
    id: 6061,
    Positive_Cases: 2,
    Coordinates: [
      39.014933,
      -121.07047
    ]
  },
  {
    Year: 2014,
    Week_Reported: 42,
    County: "Placer",
    id: 6061,
    Positive_Cases: 2,
    Coordinates: [
      39.014933,
      -121.07047
    ]
  },
  {
    Year: 2014,
    Week_Reported: 43,
    County: "Placer",
    id: 6061,
    Positive_Cases: 2,
    Coordinates: [
      39.014933,
      -121.07047
    ]
  },
  {
    Year: 2006,
    Week_Reported: 33,
    County: "Riverside",
    id: 6065,
    Positive_Cases: 1,
    Coordinates: [
      33.752886,
      -116.055617
    ]
  },
  {
    Year: 2006,
    Week_Reported: 37,
    County: "Riverside",
    id: 6065,
    Positive_Cases: 2,
    Coordinates: [
      33.752886,
      -116.055617
    ]
  },
  {
    Year: 2006,
    Week_Reported: 43,
    County: "Riverside",
    id: 6065,
    Positive_Cases: 1,
    Coordinates: [
      33.752886,
      -116.055617
    ]
  },
  {
    Year: 2007,
    Week_Reported: 35,
    County: "Riverside",
    id: 6065,
    Positive_Cases: 1,
    Coordinates: [
      33.752886,
      -116.055617
    ]
  },
  {
    Year: 2007,
    Week_Reported: 37,
    County: "Riverside",
    id: 6065,
    Positive_Cases: 6,
    Coordinates: [
      33.752886,
      -116.055617
    ]
  },
  {
    Year: 2007,
    Week_Reported: 38,
    County: "Riverside",
    id: 6065,
    Positive_Cases: 2,
    Coordinates: [
      33.752886,
      -116.055617
    ]
  },
  {
    Year: 2007,
    Week_Reported: 39,
    County: "Riverside",
    id: 6065,
    Positive_Cases: 1,
    Coordinates: [
      33.752886,
      -116.055617
    ]
  },
  {
    Year: 2007,
    Week_Reported: 41,
    County: "Riverside",
    id: 6065,
    Positive_Cases: 4,
    Coordinates: [
      33.752886,
      -116.055617
    ]
  },
  {
    Year: 2007,
    Week_Reported: 42,
    County: "Riverside",
    id: 6065,
    Positive_Cases: 1,
    Coordinates: [
      33.752886,
      -116.055617
    ]
  },
  {
    Year: 2007,
    Week_Reported: 45,
    County: "Riverside",
    id: 6065,
    Positive_Cases: 1,
    Coordinates: [
      33.752886,
      -116.055617
    ]
  },
  {
    Year: 2007,
    Week_Reported: 46,
    County: "Riverside",
    id: 6065,
    Positive_Cases: 1,
    Coordinates: [
      33.752886,
      -116.055617
    ]
  },
  {
    Year: 2008,
    Week_Reported: 32,
    County: "Riverside",
    id: 6065,
    Positive_Cases: 9,
    Coordinates: [
      33.752886,
      -116.055617
    ]
  },
  {
    Year: 2008,
    Week_Reported: 33,
    County: "Riverside",
    id: 6065,
    Positive_Cases: 4,
    Coordinates: [
      33.752886,
      -116.055617
    ]
  },
  {
    Year: 2008,
    Week_Reported: 34,
    County: "Riverside",
    id: 6065,
    Positive_Cases: 6,
    Coordinates: [
      33.752886,
      -116.055617
    ]
  },
  {
    Year: 2008,
    Week_Reported: 35,
    County: "Riverside",
    id: 6065,
    Positive_Cases: 4,
    Coordinates: [
      33.752886,
      -116.055617
    ]
  },
  {
    Year: 2008,
    Week_Reported: 36,
    County: "Riverside",
    id: 6065,
    Positive_Cases: 4,
    Coordinates: [
      33.752886,
      -116.055617
    ]
  },
  {
    Year: 2008,
    Week_Reported: 37,
    County: "Riverside",
    id: 6065,
    Positive_Cases: 9,
    Coordinates: [
      33.752886,
      -116.055617
    ]
  },
  {
    Year: 2008,
    Week_Reported: 38,
    County: "Riverside",
    id: 6065,
    Positive_Cases: 4,
    Coordinates: [
      33.752886,
      -116.055617
    ]
  },
  {
    Year: 2008,
    Week_Reported: 39,
    County: "Riverside",
    id: 6065,
    Positive_Cases: 3,
    Coordinates: [
      33.752886,
      -116.055617
    ]
  },
  {
    Year: 2008,
    Week_Reported: 40,
    County: "Riverside",
    id: 6065,
    Positive_Cases: 5,
    Coordinates: [
      33.752886,
      -116.055617
    ]
  },
  {
    Year: 2008,
    Week_Reported: 41,
    County: "Riverside",
    id: 6065,
    Positive_Cases: 2,
    Coordinates: [
      33.752886,
      -116.055617
    ]
  },
  {
    Year: 2008,
    Week_Reported: 42,
    County: "Riverside",
    id: 6065,
    Positive_Cases: 2,
    Coordinates: [
      33.752886,
      -116.055617
    ]
  },
  {
    Year: 2008,
    Week_Reported: 43,
    County: "Riverside",
    id: 6065,
    Positive_Cases: 2,
    Coordinates: [
      33.752886,
      -116.055617
    ]
  },
  {
    Year: 2008,
    Week_Reported: 44,
    County: "Riverside",
    id: 6065,
    Positive_Cases: 1,
    Coordinates: [
      33.752886,
      -116.055617
    ]
  },
  {
    Year: 2008,
    Week_Reported: 45,
    County: "Riverside",
    id: 6065,
    Positive_Cases: 3,
    Coordinates: [
      33.752886,
      -116.055617
    ]
  },
  {
    Year: 2008,
    Week_Reported: 47,
    County: "Riverside",
    id: 6065,
    Positive_Cases: 2,
    Coordinates: [
      33.752886,
      -116.055617
    ]
  },
  {
    Year: 2008,
    Week_Reported: 50,
    County: "Riverside",
    id: 6065,
    Positive_Cases: 1,
    Coordinates: [
      33.752886,
      -116.055617
    ]
  },
  {
    Year: 2008,
    Week_Reported: 53,
    County: "Riverside",
    id: 6065,
    Positive_Cases: 1,
    Coordinates: [
      33.752886,
      -116.055617
    ]
  },
  {
    Year: 2009,
    Week_Reported: 38,
    County: "Riverside",
    id: 6065,
    Positive_Cases: 1,
    Coordinates: [
      33.752886,
      -116.055617
    ]
  },
  {
    Year: 2009,
    Week_Reported: 43,
    County: "Riverside",
    id: 6065,
    Positive_Cases: 1,
    Coordinates: [
      33.752886,
      -116.055617
    ]
  },
  {
    Year: 2009,
    Week_Reported: 44,
    County: "Riverside",
    id: 6065,
    Positive_Cases: 1,
    Coordinates: [
      33.752886,
      -116.055617
    ]
  },
  {
    Year: 2011,
    Week_Reported: 38,
    County: "Riverside",
    id: 6065,
    Positive_Cases: 3,
    Coordinates: [
      33.752886,
      -116.055617
    ]
  },
  {
    Year: 2011,
    Week_Reported: 42,
    County: "Riverside",
    id: 6065,
    Positive_Cases: 1,
    Coordinates: [
      33.752886,
      -116.055617
    ]
  },
  {
    Year: 2011,
    Week_Reported: 43,
    County: "Riverside",
    id: 6065,
    Positive_Cases: 1,
    Coordinates: [
      33.752886,
      -116.055617
    ]
  },
  {
    Year: 2011,
    Week_Reported: 44,
    County: "Riverside",
    id: 6065,
    Positive_Cases: 1,
    Coordinates: [
      33.752886,
      -116.055617
    ]
  },
  {
    Year: 2011,
    Week_Reported: 47,
    County: "Riverside",
    id: 6065,
    Positive_Cases: 1,
    Coordinates: [
      33.752886,
      -116.055617
    ]
  },
  {
    Year: 2012,
    Week_Reported: 34,
    County: "Riverside",
    id: 6065,
    Positive_Cases: 1,
    Coordinates: [
      33.752886,
      -116.055617
    ]
  },
  {
    Year: 2012,
    Week_Reported: 36,
    County: "Riverside",
    id: 6065,
    Positive_Cases: 1,
    Coordinates: [
      33.752886,
      -116.055617
    ]
  },
  {
    Year: 2012,
    Week_Reported: 37,
    County: "Riverside",
    id: 6065,
    Positive_Cases: 1,
    Coordinates: [
      33.752886,
      -116.055617
    ]
  },
  {
    Year: 2012,
    Week_Reported: 38,
    County: "Riverside",
    id: 6065,
    Positive_Cases: 4,
    Coordinates: [
      33.752886,
      -116.055617
    ]
  },
  {
    Year: 2012,
    Week_Reported: 39,
    County: "Riverside",
    id: 6065,
    Positive_Cases: 2,
    Coordinates: [
      33.752886,
      -116.055617
    ]
  },
  {
    Year: 2012,
    Week_Reported: 40,
    County: "Riverside",
    id: 6065,
    Positive_Cases: 1,
    Coordinates: [
      33.752886,
      -116.055617
    ]
  },
  {
    Year: 2012,
    Week_Reported: 42,
    County: "Riverside",
    id: 6065,
    Positive_Cases: 2,
    Coordinates: [
      33.752886,
      -116.055617
    ]
  },
  {
    Year: 2012,
    Week_Reported: 44,
    County: "Riverside",
    id: 6065,
    Positive_Cases: 1,
    Coordinates: [
      33.752886,
      -116.055617
    ]
  },
  {
    Year: 2012,
    Week_Reported: 45,
    County: "Riverside",
    id: 6065,
    Positive_Cases: 2,
    Coordinates: [
      33.752886,
      -116.055617
    ]
  },
  {
    Year: 2012,
    Week_Reported: 46,
    County: "Riverside",
    id: 6065,
    Positive_Cases: 1,
    Coordinates: [
      33.752886,
      -116.055617
    ]
  },
  {
    Year: 2012,
    Week_Reported: 47,
    County: "Riverside",
    id: 6065,
    Positive_Cases: 1,
    Coordinates: [
      33.752886,
      -116.055617
    ]
  },
  {
    Year: 2012,
    Week_Reported: 48,
    County: "Riverside",
    id: 6065,
    Positive_Cases: 1,
    Coordinates: [
      33.752886,
      -116.055617
    ]
  },
  {
    Year: 2012,
    Week_Reported: 49,
    County: "Riverside",
    id: 6065,
    Positive_Cases: 1,
    Coordinates: [
      33.752886,
      -116.055617
    ]
  },
  {
    Year: 2013,
    Week_Reported: 31,
    County: "Riverside",
    id: 6065,
    Positive_Cases: 1,
    Coordinates: [
      33.752886,
      -116.055617
    ]
  },
  {
    Year: 2013,
    Week_Reported: 33,
    County: "Riverside",
    id: 6065,
    Positive_Cases: 1,
    Coordinates: [
      33.752886,
      -116.055617
    ]
  },
  {
    Year: 2013,
    Week_Reported: 35,
    County: "Riverside",
    id: 6065,
    Positive_Cases: 1,
    Coordinates: [
      33.752886,
      -116.055617
    ]
  },
  {
    Year: 2013,
    Week_Reported: 37,
    County: "Riverside",
    id: 6065,
    Positive_Cases: 1,
    Coordinates: [
      33.752886,
      -116.055617
    ]
  },
  {
    Year: 2013,
    Week_Reported: 38,
    County: "Riverside",
    id: 6065,
    Positive_Cases: 3,
    Coordinates: [
      33.752886,
      -116.055617
    ]
  },
  {
    Year: 2013,
    Week_Reported: 39,
    County: "Riverside",
    id: 6065,
    Positive_Cases: 5,
    Coordinates: [
      33.752886,
      -116.055617
    ]
  },
  {
    Year: 2013,
    Week_Reported: 40,
    County: "Riverside",
    id: 6065,
    Positive_Cases: 4,
    Coordinates: [
      33.752886,
      -116.055617
    ]
  },
  {
    Year: 2013,
    Week_Reported: 41,
    County: "Riverside",
    id: 6065,
    Positive_Cases: 4,
    Coordinates: [
      33.752886,
      -116.055617
    ]
  },
  {
    Year: 2013,
    Week_Reported: 42,
    County: "Riverside",
    id: 6065,
    Positive_Cases: 5,
    Coordinates: [
      33.752886,
      -116.055617
    ]
  },
  {
    Year: 2013,
    Week_Reported: 43,
    County: "Riverside",
    id: 6065,
    Positive_Cases: 6,
    Coordinates: [
      33.752886,
      -116.055617
    ]
  },
  {
    Year: 2013,
    Week_Reported: 44,
    County: "Riverside",
    id: 6065,
    Positive_Cases: 3,
    Coordinates: [
      33.752886,
      -116.055617
    ]
  },
  {
    Year: 2013,
    Week_Reported: 45,
    County: "Riverside",
    id: 6065,
    Positive_Cases: 1,
    Coordinates: [
      33.752886,
      -116.055617
    ]
  },
  {
    Year: 2014,
    Week_Reported: 36,
    County: "Riverside",
    id: 6065,
    Positive_Cases: 1,
    Coordinates: [
      33.752886,
      -116.055617
    ]
  },
  {
    Year: 2014,
    Week_Reported: 38,
    County: "Riverside",
    id: 6065,
    Positive_Cases: 3,
    Coordinates: [
      33.752886,
      -116.055617
    ]
  },
  {
    Year: 2014,
    Week_Reported: 39,
    County: "Riverside",
    id: 6065,
    Positive_Cases: 1,
    Coordinates: [
      33.752886,
      -116.055617
    ]
  },
  {
    Year: 2014,
    Week_Reported: 40,
    County: "Riverside",
    id: 6065,
    Positive_Cases: 3,
    Coordinates: [
      33.752886,
      -116.055617
    ]
  },
  {
    Year: 2014,
    Week_Reported: 41,
    County: "Riverside",
    id: 6065,
    Positive_Cases: 1,
    Coordinates: [
      33.752886,
      -116.055617
    ]
  },
  {
    Year: 2014,
    Week_Reported: 44,
    County: "Riverside",
    id: 6065,
    Positive_Cases: 2,
    Coordinates: [
      33.752886,
      -116.055617
    ]
  },
  {
    Year: 2014,
    Week_Reported: 47,
    County: "Riverside",
    id: 6065,
    Positive_Cases: 1,
    Coordinates: [
      33.752886,
      -116.055617
    ]
  },
  {
    Year: 2014,
    Week_Reported: 52,
    County: "Riverside",
    id: 6065,
    Positive_Cases: 2,
    Coordinates: [
      33.752886,
      -116.055617
    ]
  },
  {
    Year: 2015,
    Week_Reported: 31,
    County: "Riverside",
    id: 6065,
    Positive_Cases: 2,
    Coordinates: [
      33.752886,
      -116.055617
    ]
  },
  {
    Year: 2015,
    Week_Reported: 32,
    County: "Riverside",
    id: 6065,
    Positive_Cases: 1,
    Coordinates: [
      33.752886,
      -116.055617
    ]
  },
  {
    Year: 2015,
    Week_Reported: 34,
    County: "Riverside",
    id: 6065,
    Positive_Cases: 1,
    Coordinates: [
      33.752886,
      -116.055617
    ]
  },
  {
    Year: 2015,
    Week_Reported: 35,
    County: "Riverside",
    id: 6065,
    Positive_Cases: 5,
    Coordinates: [
      33.752886,
      -116.055617
    ]
  },
  {
    Year: 2015,
    Week_Reported: 36,
    County: "Riverside",
    id: 6065,
    Positive_Cases: 2,
    Coordinates: [
      33.752886,
      -116.055617
    ]
  },
  {
    Year: 2015,
    Week_Reported: 37,
    County: "Riverside",
    id: 6065,
    Positive_Cases: 4,
    Coordinates: [
      33.752886,
      -116.055617
    ]
  },
  {
    Year: 2015,
    Week_Reported: 38,
    County: "Riverside",
    id: 6065,
    Positive_Cases: 8,
    Coordinates: [
      33.752886,
      -116.055617
    ]
  },
  {
    Year: 2015,
    Week_Reported: 39,
    County: "Riverside",
    id: 6065,
    Positive_Cases: 5,
    Coordinates: [
      33.752886,
      -116.055617
    ]
  },
  {
    Year: 2015,
    Week_Reported: 40,
    County: "Riverside",
    id: 6065,
    Positive_Cases: 26,
    Coordinates: [
      33.752886,
      -116.055617
    ]
  },
  {
    Year: 2015,
    Week_Reported: 41,
    County: "Riverside",
    id: 6065,
    Positive_Cases: 12,
    Coordinates: [
      33.752886,
      -116.055617
    ]
  },
  {
    Year: 2015,
    Week_Reported: 42,
    County: "Riverside",
    id: 6065,
    Positive_Cases: 23,
    Coordinates: [
      33.752886,
      -116.055617
    ]
  },
  {
    Year: 2015,
    Week_Reported: 43,
    County: "Riverside",
    id: 6065,
    Positive_Cases: 4,
    Coordinates: [
      33.752886,
      -116.055617
    ]
  },
  {
    Year: 2015,
    Week_Reported: 44,
    County: "Riverside",
    id: 6065,
    Positive_Cases: 9,
    Coordinates: [
      33.752886,
      -116.055617
    ]
  },
  {
    Year: 2015,
    Week_Reported: 45,
    County: "Riverside",
    id: 6065,
    Positive_Cases: 7,
    Coordinates: [
      33.752886,
      -116.055617
    ]
  },
  {
    Year: 2015,
    Week_Reported: 46,
    County: "Riverside",
    id: 6065,
    Positive_Cases: 2,
    Coordinates: [
      33.752886,
      -116.055617
    ]
  },
  {
    Year: 2015,
    Week_Reported: 47,
    County: "Riverside",
    id: 6065,
    Positive_Cases: 8,
    Coordinates: [
      33.752886,
      -116.055617
    ]
  },
  {
    Year: 2015,
    Week_Reported: 49,
    County: "Riverside",
    id: 6065,
    Positive_Cases: 4,
    Coordinates: [
      33.752886,
      -116.055617
    ]
  },
  {
    Year: 2015,
    Week_Reported: 50,
    County: "Riverside",
    id: 6065,
    Positive_Cases: 1,
    Coordinates: [
      33.752886,
      -116.055617
    ]
  },
  {
    Year: 2015,
    Week_Reported: 52,
    County: "Riverside",
    id: 6065,
    Positive_Cases: 1,
    Coordinates: [
      33.752886,
      -116.055617
    ]
  },
  {
    Year: 2006,
    Week_Reported: 31,
    County: "Sacramento",
    id: 6067,
    Positive_Cases: 1,
    Coordinates: [
      38.380456,
      -121.555406
    ]
  },
  {
    Year: 2006,
    Week_Reported: 32,
    County: "Sacramento",
    id: 6067,
    Positive_Cases: 1,
    Coordinates: [
      38.380456,
      -121.555406
    ]
  },
  {
    Year: 2006,
    Week_Reported: 33,
    County: "Sacramento",
    id: 6067,
    Positive_Cases: 2,
    Coordinates: [
      38.380456,
      -121.555406
    ]
  },
  {
    Year: 2006,
    Week_Reported: 34,
    County: "Sacramento",
    id: 6067,
    Positive_Cases: 1,
    Coordinates: [
      38.380456,
      -121.555406
    ]
  },
  {
    Year: 2006,
    Week_Reported: 35,
    County: "Sacramento",
    id: 6067,
    Positive_Cases: 2,
    Coordinates: [
      38.380456,
      -121.555406
    ]
  },
  {
    Year: 2006,
    Week_Reported: 37,
    County: "Sacramento",
    id: 6067,
    Positive_Cases: 3,
    Coordinates: [
      38.380456,
      -121.555406
    ]
  },
  {
    Year: 2006,
    Week_Reported: 38,
    County: "Sacramento",
    id: 6067,
    Positive_Cases: 1,
    Coordinates: [
      38.380456,
      -121.555406
    ]
  },
  {
    Year: 2006,
    Week_Reported: 43,
    County: "Sacramento",
    id: 6067,
    Positive_Cases: 2,
    Coordinates: [
      38.380456,
      -121.555406
    ]
  },
  {
    Year: 2006,
    Week_Reported: 45,
    County: "Sacramento",
    id: 6067,
    Positive_Cases: 1,
    Coordinates: [
      38.380456,
      -121.555406
    ]
  },
  {
    Year: 2006,
    Week_Reported: 46,
    County: "Sacramento",
    id: 6067,
    Positive_Cases: 1,
    Coordinates: [
      38.380456,
      -121.555406
    ]
  },
  {
    Year: 2007,
    Week_Reported: 31,
    County: "Sacramento",
    id: 6067,
    Positive_Cases: 1,
    Coordinates: [
      38.380456,
      -121.555406
    ]
  },
  {
    Year: 2007,
    Week_Reported: 33,
    County: "Sacramento",
    id: 6067,
    Positive_Cases: 2,
    Coordinates: [
      38.380456,
      -121.555406
    ]
  },
  {
    Year: 2007,
    Week_Reported: 34,
    County: "Sacramento",
    id: 6067,
    Positive_Cases: 4,
    Coordinates: [
      38.380456,
      -121.555406
    ]
  },
  {
    Year: 2007,
    Week_Reported: 35,
    County: "Sacramento",
    id: 6067,
    Positive_Cases: 3,
    Coordinates: [
      38.380456,
      -121.555406
    ]
  },
  {
    Year: 2007,
    Week_Reported: 36,
    County: "Sacramento",
    id: 6067,
    Positive_Cases: 3,
    Coordinates: [
      38.380456,
      -121.555406
    ]
  },
  {
    Year: 2007,
    Week_Reported: 38,
    County: "Sacramento",
    id: 6067,
    Positive_Cases: 1,
    Coordinates: [
      38.380456,
      -121.555406
    ]
  },
  {
    Year: 2007,
    Week_Reported: 40,
    County: "Sacramento",
    id: 6067,
    Positive_Cases: 2,
    Coordinates: [
      38.380456,
      -121.555406
    ]
  },
  {
    Year: 2007,
    Week_Reported: 41,
    County: "Sacramento",
    id: 6067,
    Positive_Cases: 3,
    Coordinates: [
      38.380456,
      -121.555406
    ]
  },
  {
    Year: 2007,
    Week_Reported: 43,
    County: "Sacramento",
    id: 6067,
    Positive_Cases: 3,
    Coordinates: [
      38.380456,
      -121.555406
    ]
  },
  {
    Year: 2007,
    Week_Reported: 44,
    County: "Sacramento",
    id: 6067,
    Positive_Cases: 2,
    Coordinates: [
      38.380456,
      -121.555406
    ]
  },
  {
    Year: 2007,
    Week_Reported: 48,
    County: "Sacramento",
    id: 6067,
    Positive_Cases: 1,
    Coordinates: [
      38.380456,
      -121.555406
    ]
  },
  {
    Year: 2008,
    Week_Reported: 32,
    County: "Sacramento",
    id: 6067,
    Positive_Cases: 2,
    Coordinates: [
      38.380456,
      -121.555406
    ]
  },
  {
    Year: 2008,
    Week_Reported: 33,
    County: "Sacramento",
    id: 6067,
    Positive_Cases: 1,
    Coordinates: [
      38.380456,
      -121.555406
    ]
  },
  {
    Year: 2008,
    Week_Reported: 34,
    County: "Sacramento",
    id: 6067,
    Positive_Cases: 1,
    Coordinates: [
      38.380456,
      -121.555406
    ]
  },
  {
    Year: 2008,
    Week_Reported: 36,
    County: "Sacramento",
    id: 6067,
    Positive_Cases: 1,
    Coordinates: [
      38.380456,
      -121.555406
    ]
  },
  {
    Year: 2008,
    Week_Reported: 37,
    County: "Sacramento",
    id: 6067,
    Positive_Cases: 2,
    Coordinates: [
      38.380456,
      -121.555406
    ]
  },
  {
    Year: 2008,
    Week_Reported: 38,
    County: "Sacramento",
    id: 6067,
    Positive_Cases: 1,
    Coordinates: [
      38.380456,
      -121.555406
    ]
  },
  {
    Year: 2008,
    Week_Reported: 40,
    County: "Sacramento",
    id: 6067,
    Positive_Cases: 2,
    Coordinates: [
      38.380456,
      -121.555406
    ]
  },
  {
    Year: 2008,
    Week_Reported: 43,
    County: "Sacramento",
    id: 6067,
    Positive_Cases: 3,
    Coordinates: [
      38.380456,
      -121.555406
    ]
  },
  {
    Year: 2010,
    Week_Reported: 31,
    County: "Sacramento",
    id: 6067,
    Positive_Cases: 2,
    Coordinates: [
      38.380456,
      -121.555406
    ]
  },
  {
    Year: 2010,
    Week_Reported: 33,
    County: "Sacramento",
    id: 6067,
    Positive_Cases: 1,
    Coordinates: [
      38.380456,
      -121.555406
    ]
  },
  {
    Year: 2010,
    Week_Reported: 35,
    County: "Sacramento",
    id: 6067,
    Positive_Cases: 2,
    Coordinates: [
      38.380456,
      -121.555406
    ]
  },
  {
    Year: 2010,
    Week_Reported: 42,
    County: "Sacramento",
    id: 6067,
    Positive_Cases: 3,
    Coordinates: [
      38.380456,
      -121.555406
    ]
  },
  {
    Year: 2010,
    Week_Reported: 43,
    County: "Sacramento",
    id: 6067,
    Positive_Cases: 2,
    Coordinates: [
      38.380456,
      -121.555406
    ]
  },
  {
    Year: 2010,
    Week_Reported: 44,
    County: "Sacramento",
    id: 6067,
    Positive_Cases: 2,
    Coordinates: [
      38.380456,
      -121.555406
    ]
  },
  {
    Year: 2011,
    Week_Reported: 40,
    County: "Sacramento",
    id: 6067,
    Positive_Cases: 1,
    Coordinates: [
      38.380456,
      -121.555406
    ]
  },
  {
    Year: 2011,
    Week_Reported: 43,
    County: "Sacramento",
    id: 6067,
    Positive_Cases: 1,
    Coordinates: [
      38.380456,
      -121.555406
    ]
  },
  {
    Year: 2011,
    Week_Reported: 44,
    County: "Sacramento",
    id: 6067,
    Positive_Cases: 2,
    Coordinates: [
      38.380456,
      -121.555406
    ]
  },
  {
    Year: 2012,
    Week_Reported: 32,
    County: "Sacramento",
    id: 6067,
    Positive_Cases: 2,
    Coordinates: [
      38.380456,
      -121.555406
    ]
  },
  {
    Year: 2012,
    Week_Reported: 35,
    County: "Sacramento",
    id: 6067,
    Positive_Cases: 1,
    Coordinates: [
      38.380456,
      -121.555406
    ]
  },
  {
    Year: 2012,
    Week_Reported: 36,
    County: "Sacramento",
    id: 6067,
    Positive_Cases: 2,
    Coordinates: [
      38.380456,
      -121.555406
    ]
  },
  {
    Year: 2012,
    Week_Reported: 37,
    County: "Sacramento",
    id: 6067,
    Positive_Cases: 3,
    Coordinates: [
      38.380456,
      -121.555406
    ]
  },
  {
    Year: 2012,
    Week_Reported: 38,
    County: "Sacramento",
    id: 6067,
    Positive_Cases: 1,
    Coordinates: [
      38.380456,
      -121.555406
    ]
  },
  {
    Year: 2012,
    Week_Reported: 39,
    County: "Sacramento",
    id: 6067,
    Positive_Cases: 5,
    Coordinates: [
      38.380456,
      -121.555406
    ]
  },
  {
    Year: 2012,
    Week_Reported: 40,
    County: "Sacramento",
    id: 6067,
    Positive_Cases: 1,
    Coordinates: [
      38.380456,
      -121.555406
    ]
  },
  {
    Year: 2012,
    Week_Reported: 43,
    County: "Sacramento",
    id: 6067,
    Positive_Cases: 6,
    Coordinates: [
      38.380456,
      -121.555406
    ]
  },
  {
    Year: 2012,
    Week_Reported: 44,
    County: "Sacramento",
    id: 6067,
    Positive_Cases: 5,
    Coordinates: [
      38.380456,
      -121.555406
    ]
  },
  {
    Year: 2012,
    Week_Reported: 45,
    County: "Sacramento",
    id: 6067,
    Positive_Cases: 3,
    Coordinates: [
      38.380456,
      -121.555406
    ]
  },
  {
    Year: 2012,
    Week_Reported: 52,
    County: "Sacramento",
    id: 6067,
    Positive_Cases: 1,
    Coordinates: [
      38.380456,
      -121.555406
    ]
  },
  {
    Year: 2013,
    Week_Reported: 9,
    County: "Sacramento",
    id: 6067,
    Positive_Cases: 1,
    Coordinates: [
      38.380456,
      -121.555406
    ]
  },
  {
    Year: 2013,
    Week_Reported: 31,
    County: "Sacramento",
    id: 6067,
    Positive_Cases: 1,
    Coordinates: [
      38.380456,
      -121.555406
    ]
  },
  {
    Year: 2013,
    Week_Reported: 34,
    County: "Sacramento",
    id: 6067,
    Positive_Cases: 1,
    Coordinates: [
      38.380456,
      -121.555406
    ]
  },
  {
    Year: 2013,
    Week_Reported: 45,
    County: "Sacramento",
    id: 6067,
    Positive_Cases: 6,
    Coordinates: [
      38.380456,
      -121.555406
    ]
  },
  {
    Year: 2013,
    Week_Reported: 47,
    County: "Sacramento",
    id: 6067,
    Positive_Cases: 1,
    Coordinates: [
      38.380456,
      -121.555406
    ]
  },
  {
    Year: 2014,
    Week_Reported: 31,
    County: "Sacramento",
    id: 6067,
    Positive_Cases: 2,
    Coordinates: [
      38.380456,
      -121.555406
    ]
  },
  {
    Year: 2014,
    Week_Reported: 33,
    County: "Sacramento",
    id: 6067,
    Positive_Cases: 1,
    Coordinates: [
      38.380456,
      -121.555406
    ]
  },
  {
    Year: 2014,
    Week_Reported: 35,
    County: "Sacramento",
    id: 6067,
    Positive_Cases: 1,
    Coordinates: [
      38.380456,
      -121.555406
    ]
  },
  {
    Year: 2014,
    Week_Reported: 37,
    County: "Sacramento",
    id: 6067,
    Positive_Cases: 3,
    Coordinates: [
      38.380456,
      -121.555406
    ]
  },
  {
    Year: 2014,
    Week_Reported: 38,
    County: "Sacramento",
    id: 6067,
    Positive_Cases: 3,
    Coordinates: [
      38.380456,
      -121.555406
    ]
  },
  {
    Year: 2015,
    Week_Reported: 37,
    County: "Sacramento",
    id: 6067,
    Positive_Cases: 1,
    Coordinates: [
      38.380456,
      -121.555406
    ]
  },
  {
    Year: 2015,
    Week_Reported: 41,
    County: "Sacramento",
    id: 6067,
    Positive_Cases: 1,
    Coordinates: [
      38.380456,
      -121.555406
    ]
  },
  {
    Year: 2015,
    Week_Reported: 48,
    County: "Sacramento",
    id: 6067,
    Positive_Cases: 1,
    Coordinates: [
      38.380456,
      -121.555406
    ]
  },
  {
    Year: 2015,
    Week_Reported: 50,
    County: "Sacramento",
    id: 6067,
    Positive_Cases: 1,
    Coordinates: [
      38.380456,
      -121.555406
    ]
  },
  {
    Year: 2006,
    Week_Reported: 39,
    County: "San Bernardino",
    id: 6071,
    Positive_Cases: 1,
    Coordinates: [
      34.839964,
      -115.967051
    ]
  },
  {
    Year: 2006,
    Week_Reported: 43,
    County: "San Bernardino",
    id: 6071,
    Positive_Cases: 2,
    Coordinates: [
      34.839964,
      -115.967051
    ]
  },
  {
    Year: 2007,
    Week_Reported: 33,
    County: "San Bernardino",
    id: 6071,
    Positive_Cases: 1,
    Coordinates: [
      34.839964,
      -115.967051
    ]
  },
  {
    Year: 2007,
    Week_Reported: 36,
    County: "San Bernardino",
    id: 6071,
    Positive_Cases: 1,
    Coordinates: [
      34.839964,
      -115.967051
    ]
  },
  {
    Year: 2007,
    Week_Reported: 39,
    County: "San Bernardino",
    id: 6071,
    Positive_Cases: 1,
    Coordinates: [
      34.839964,
      -115.967051
    ]
  },
  {
    Year: 2007,
    Week_Reported: 44,
    County: "San Bernardino",
    id: 6071,
    Positive_Cases: 1,
    Coordinates: [
      34.839964,
      -115.967051
    ]
  },
  {
    Year: 2008,
    Week_Reported: 32,
    County: "San Bernardino",
    id: 6071,
    Positive_Cases: 2,
    Coordinates: [
      34.839964,
      -115.967051
    ]
  },
  {
    Year: 2008,
    Week_Reported: 35,
    County: "San Bernardino",
    id: 6071,
    Positive_Cases: 1,
    Coordinates: [
      34.839964,
      -115.967051
    ]
  },
  {
    Year: 2008,
    Week_Reported: 36,
    County: "San Bernardino",
    id: 6071,
    Positive_Cases: 2,
    Coordinates: [
      34.839964,
      -115.967051
    ]
  },
  {
    Year: 2008,
    Week_Reported: 38,
    County: "San Bernardino",
    id: 6071,
    Positive_Cases: 5,
    Coordinates: [
      34.839964,
      -115.967051
    ]
  },
  {
    Year: 2008,
    Week_Reported: 39,
    County: "San Bernardino",
    id: 6071,
    Positive_Cases: 2,
    Coordinates: [
      34.839964,
      -115.967051
    ]
  },
  {
    Year: 2008,
    Week_Reported: 41,
    County: "San Bernardino",
    id: 6071,
    Positive_Cases: 6,
    Coordinates: [
      34.839964,
      -115.967051
    ]
  },
  {
    Year: 2008,
    Week_Reported: 44,
    County: "San Bernardino",
    id: 6071,
    Positive_Cases: 3,
    Coordinates: [
      34.839964,
      -115.967051
    ]
  },
  {
    Year: 2008,
    Week_Reported: 45,
    County: "San Bernardino",
    id: 6071,
    Positive_Cases: 3,
    Coordinates: [
      34.839964,
      -115.967051
    ]
  },
  {
    Year: 2008,
    Week_Reported: 47,
    County: "San Bernardino",
    id: 6071,
    Positive_Cases: 1,
    Coordinates: [
      34.839964,
      -115.967051
    ]
  },
  {
    Year: 2008,
    Week_Reported: 49,
    County: "San Bernardino",
    id: 6071,
    Positive_Cases: 2,
    Coordinates: [
      34.839964,
      -115.967051
    ]
  },
  {
    Year: 2008,
    Week_Reported: 50,
    County: "San Bernardino",
    id: 6071,
    Positive_Cases: 1,
    Coordinates: [
      34.839964,
      -115.967051
    ]
  },
  {
    Year: 2008,
    Week_Reported: 53,
    County: "San Bernardino",
    id: 6071,
    Positive_Cases: 8,
    Coordinates: [
      34.839964,
      -115.967051
    ]
  },
  {
    Year: 2009,
    Week_Reported: 39,
    County: "San Bernardino",
    id: 6071,
    Positive_Cases: 1,
    Coordinates: [
      34.839964,
      -115.967051
    ]
  },
  {
    Year: 2009,
    Week_Reported: 52,
    County: "San Bernardino",
    id: 6071,
    Positive_Cases: 1,
    Coordinates: [
      34.839964,
      -115.967051
    ]
  },
  {
    Year: 2010,
    Week_Reported: 30,
    County: "San Bernardino",
    id: 6071,
    Positive_Cases: 1,
    Coordinates: [
      34.839964,
      -115.967051
    ]
  },
  {
    Year: 2010,
    Week_Reported: 32,
    County: "San Bernardino",
    id: 6071,
    Positive_Cases: 1,
    Coordinates: [
      34.839964,
      -115.967051
    ]
  },
  {
    Year: 2010,
    Week_Reported: 43,
    County: "San Bernardino",
    id: 6071,
    Positive_Cases: 2,
    Coordinates: [
      34.839964,
      -115.967051
    ]
  },
  {
    Year: 2010,
    Week_Reported: 48,
    County: "San Bernardino",
    id: 6071,
    Positive_Cases: 1,
    Coordinates: [
      34.839964,
      -115.967051
    ]
  },
  {
    Year: 2011,
    Week_Reported: 37,
    County: "San Bernardino",
    id: 6071,
    Positive_Cases: 2,
    Coordinates: [
      34.839964,
      -115.967051
    ]
  },
  {
    Year: 2011,
    Week_Reported: 41,
    County: "San Bernardino",
    id: 6071,
    Positive_Cases: 1,
    Coordinates: [
      34.839964,
      -115.967051
    ]
  },
  {
    Year: 2011,
    Week_Reported: 45,
    County: "San Bernardino",
    id: 6071,
    Positive_Cases: 1,
    Coordinates: [
      34.839964,
      -115.967051
    ]
  },
  {
    Year: 2012,
    Week_Reported: 34,
    County: "San Bernardino",
    id: 6071,
    Positive_Cases: 1,
    Coordinates: [
      34.839964,
      -115.967051
    ]
  },
  {
    Year: 2012,
    Week_Reported: 35,
    County: "San Bernardino",
    id: 6071,
    Positive_Cases: 1,
    Coordinates: [
      34.839964,
      -115.967051
    ]
  },
  {
    Year: 2012,
    Week_Reported: 36,
    County: "San Bernardino",
    id: 6071,
    Positive_Cases: 1,
    Coordinates: [
      34.839964,
      -115.967051
    ]
  },
  {
    Year: 2012,
    Week_Reported: 38,
    County: "San Bernardino",
    id: 6071,
    Positive_Cases: 4,
    Coordinates: [
      34.839964,
      -115.967051
    ]
  },
  {
    Year: 2012,
    Week_Reported: 40,
    County: "San Bernardino",
    id: 6071,
    Positive_Cases: 2,
    Coordinates: [
      34.839964,
      -115.967051
    ]
  },
  {
    Year: 2012,
    Week_Reported: 43,
    County: "San Bernardino",
    id: 6071,
    Positive_Cases: 8,
    Coordinates: [
      34.839964,
      -115.967051
    ]
  },
  {
    Year: 2012,
    Week_Reported: 44,
    County: "San Bernardino",
    id: 6071,
    Positive_Cases: 7,
    Coordinates: [
      34.839964,
      -115.967051
    ]
  },
  {
    Year: 2012,
    Week_Reported: 45,
    County: "San Bernardino",
    id: 6071,
    Positive_Cases: 1,
    Coordinates: [
      34.839964,
      -115.967051
    ]
  },
  {
    Year: 2012,
    Week_Reported: 48,
    County: "San Bernardino",
    id: 6071,
    Positive_Cases: 3,
    Coordinates: [
      34.839964,
      -115.967051
    ]
  },
  {
    Year: 2012,
    Week_Reported: 49,
    County: "San Bernardino",
    id: 6071,
    Positive_Cases: 2,
    Coordinates: [
      34.839964,
      -115.967051
    ]
  },
  {
    Year: 2012,
    Week_Reported: 51,
    County: "San Bernardino",
    id: 6071,
    Positive_Cases: 2,
    Coordinates: [
      34.839964,
      -115.967051
    ]
  },
  {
    Year: 2013,
    Week_Reported: 35,
    County: "San Bernardino",
    id: 6071,
    Positive_Cases: 1,
    Coordinates: [
      34.839964,
      -115.967051
    ]
  },
  {
    Year: 2013,
    Week_Reported: 38,
    County: "San Bernardino",
    id: 6071,
    Positive_Cases: 1,
    Coordinates: [
      34.839964,
      -115.967051
    ]
  },
  {
    Year: 2013,
    Week_Reported: 40,
    County: "San Bernardino",
    id: 6071,
    Positive_Cases: 2,
    Coordinates: [
      34.839964,
      -115.967051
    ]
  },
  {
    Year: 2013,
    Week_Reported: 41,
    County: "San Bernardino",
    id: 6071,
    Positive_Cases: 1,
    Coordinates: [
      34.839964,
      -115.967051
    ]
  },
  {
    Year: 2013,
    Week_Reported: 43,
    County: "San Bernardino",
    id: 6071,
    Positive_Cases: 4,
    Coordinates: [
      34.839964,
      -115.967051
    ]
  },
  {
    Year: 2013,
    Week_Reported: 44,
    County: "San Bernardino",
    id: 6071,
    Positive_Cases: 2,
    Coordinates: [
      34.839964,
      -115.967051
    ]
  },
  {
    Year: 2013,
    Week_Reported: 46,
    County: "San Bernardino",
    id: 6071,
    Positive_Cases: 2,
    Coordinates: [
      34.839964,
      -115.967051
    ]
  },
  {
    Year: 2014,
    Week_Reported: 33,
    County: "San Bernardino",
    id: 6071,
    Positive_Cases: 1,
    Coordinates: [
      34.839964,
      -115.967051
    ]
  },
  {
    Year: 2014,
    Week_Reported: 34,
    County: "San Bernardino",
    id: 6071,
    Positive_Cases: 1,
    Coordinates: [
      34.839964,
      -115.967051
    ]
  },
  {
    Year: 2014,
    Week_Reported: 36,
    County: "San Bernardino",
    id: 6071,
    Positive_Cases: 2,
    Coordinates: [
      34.839964,
      -115.967051
    ]
  },
  {
    Year: 2014,
    Week_Reported: 37,
    County: "San Bernardino",
    id: 6071,
    Positive_Cases: 3,
    Coordinates: [
      34.839964,
      -115.967051
    ]
  },
  {
    Year: 2014,
    Week_Reported: 38,
    County: "San Bernardino",
    id: 6071,
    Positive_Cases: 1,
    Coordinates: [
      34.839964,
      -115.967051
    ]
  },
  {
    Year: 2014,
    Week_Reported: 39,
    County: "San Bernardino",
    id: 6071,
    Positive_Cases: 3,
    Coordinates: [
      34.839964,
      -115.967051
    ]
  },
  {
    Year: 2014,
    Week_Reported: 40,
    County: "San Bernardino",
    id: 6071,
    Positive_Cases: 2,
    Coordinates: [
      34.839964,
      -115.967051
    ]
  },
  {
    Year: 2014,
    Week_Reported: 44,
    County: "San Bernardino",
    id: 6071,
    Positive_Cases: 1,
    Coordinates: [
      34.839964,
      -115.967051
    ]
  },
  {
    Year: 2014,
    Week_Reported: 45,
    County: "San Bernardino",
    id: 6071,
    Positive_Cases: 1,
    Coordinates: [
      34.839964,
      -115.967051
    ]
  },
  {
    Year: 2014,
    Week_Reported: 46,
    County: "San Bernardino",
    id: 6071,
    Positive_Cases: 1,
    Coordinates: [
      34.839964,
      -115.967051
    ]
  },
  {
    Year: 2014,
    Week_Reported: 47,
    County: "San Bernardino",
    id: 6071,
    Positive_Cases: 1,
    Coordinates: [
      34.839964,
      -115.967051
    ]
  },
  {
    Year: 2014,
    Week_Reported: 49,
    County: "San Bernardino",
    id: 6071,
    Positive_Cases: 4,
    Coordinates: [
      34.839964,
      -115.967051
    ]
  },
  {
    Year: 2015,
    Week_Reported: 32,
    County: "San Bernardino",
    id: 6071,
    Positive_Cases: 1,
    Coordinates: [
      34.839964,
      -115.967051
    ]
  },
  {
    Year: 2015,
    Week_Reported: 34,
    County: "San Bernardino",
    id: 6071,
    Positive_Cases: 1,
    Coordinates: [
      34.839964,
      -115.967051
    ]
  },
  {
    Year: 2015,
    Week_Reported: 35,
    County: "San Bernardino",
    id: 6071,
    Positive_Cases: 2,
    Coordinates: [
      34.839964,
      -115.967051
    ]
  },
  {
    Year: 2015,
    Week_Reported: 37,
    County: "San Bernardino",
    id: 6071,
    Positive_Cases: 3,
    Coordinates: [
      34.839964,
      -115.967051
    ]
  },
  {
    Year: 2015,
    Week_Reported: 38,
    County: "San Bernardino",
    id: 6071,
    Positive_Cases: 4,
    Coordinates: [
      34.839964,
      -115.967051
    ]
  },
  {
    Year: 2015,
    Week_Reported: 39,
    County: "San Bernardino",
    id: 6071,
    Positive_Cases: 8,
    Coordinates: [
      34.839964,
      -115.967051
    ]
  },
  {
    Year: 2015,
    Week_Reported: 40,
    County: "San Bernardino",
    id: 6071,
    Positive_Cases: 3,
    Coordinates: [
      34.839964,
      -115.967051
    ]
  },
  {
    Year: 2015,
    Week_Reported: 41,
    County: "San Bernardino",
    id: 6071,
    Positive_Cases: 3,
    Coordinates: [
      34.839964,
      -115.967051
    ]
  },
  {
    Year: 2015,
    Week_Reported: 42,
    County: "San Bernardino",
    id: 6071,
    Positive_Cases: 6,
    Coordinates: [
      34.839964,
      -115.967051
    ]
  },
  {
    Year: 2015,
    Week_Reported: 43,
    County: "San Bernardino",
    id: 6071,
    Positive_Cases: 6,
    Coordinates: [
      34.839964,
      -115.967051
    ]
  },
  {
    Year: 2015,
    Week_Reported: 44,
    County: "San Bernardino",
    id: 6071,
    Positive_Cases: 3,
    Coordinates: [
      34.839964,
      -115.967051
    ]
  },
  {
    Year: 2015,
    Week_Reported: 45,
    County: "San Bernardino",
    id: 6071,
    Positive_Cases: 1,
    Coordinates: [
      34.839964,
      -115.967051
    ]
  },
  {
    Year: 2015,
    Week_Reported: 46,
    County: "San Bernardino",
    id: 6071,
    Positive_Cases: 2,
    Coordinates: [
      34.839964,
      -115.967051
    ]
  },
  {
    Year: 2015,
    Week_Reported: 47,
    County: "San Bernardino",
    id: 6071,
    Positive_Cases: 2,
    Coordinates: [
      34.839964,
      -115.967051
    ]
  },
  {
    Year: 2015,
    Week_Reported: 48,
    County: "San Bernardino",
    id: 6071,
    Positive_Cases: 1,
    Coordinates: [
      34.839964,
      -115.967051
    ]
  },
  {
    Year: 2015,
    Week_Reported: 50,
    County: "San Bernardino",
    id: 6071,
    Positive_Cases: 3,
    Coordinates: [
      34.839964,
      -115.967051
    ]
  },
  {
    Year: 2015,
    Week_Reported: 52,
    County: "San Bernardino",
    id: 6071,
    Positive_Cases: 1,
    Coordinates: [
      34.839964,
      -115.967051
    ]
  },
  {
    Year: 2006,
    Week_Reported: 39,
    County: "San Diego",
    id: 6073,
    Positive_Cases: 1,
    Coordinates: [
      32.74081,
      -116.976341
    ]
  },
  {
    Year: 2007,
    Week_Reported: 36,
    County: "San Diego",
    id: 6073,
    Positive_Cases: 2,
    Coordinates: [
      32.74081,
      -116.976341
    ]
  },
  {
    Year: 2007,
    Week_Reported: 38,
    County: "San Diego",
    id: 6073,
    Positive_Cases: 2,
    Coordinates: [
      32.74081,
      -116.976341
    ]
  },
  {
    Year: 2007,
    Week_Reported: 39,
    County: "San Diego",
    id: 6073,
    Positive_Cases: 4,
    Coordinates: [
      32.74081,
      -116.976341
    ]
  },
  {
    Year: 2007,
    Week_Reported: 40,
    County: "San Diego",
    id: 6073,
    Positive_Cases: 6,
    Coordinates: [
      32.74081,
      -116.976341
    ]
  },
  {
    Year: 2007,
    Week_Reported: 42,
    County: "San Diego",
    id: 6073,
    Positive_Cases: 1,
    Coordinates: [
      32.74081,
      -116.976341
    ]
  },
  {
    Year: 2008,
    Week_Reported: 30,
    County: "San Diego",
    id: 6073,
    Positive_Cases: 1,
    Coordinates: [
      32.74081,
      -116.976341
    ]
  },
  {
    Year: 2008,
    Week_Reported: 32,
    County: "San Diego",
    id: 6073,
    Positive_Cases: 2,
    Coordinates: [
      32.74081,
      -116.976341
    ]
  },
  {
    Year: 2008,
    Week_Reported: 33,
    County: "San Diego",
    id: 6073,
    Positive_Cases: 1,
    Coordinates: [
      32.74081,
      -116.976341
    ]
  },
  {
    Year: 2008,
    Week_Reported: 34,
    County: "San Diego",
    id: 6073,
    Positive_Cases: 1,
    Coordinates: [
      32.74081,
      -116.976341
    ]
  },
  {
    Year: 2008,
    Week_Reported: 35,
    County: "San Diego",
    id: 6073,
    Positive_Cases: 4,
    Coordinates: [
      32.74081,
      -116.976341
    ]
  },
  {
    Year: 2008,
    Week_Reported: 36,
    County: "San Diego",
    id: 6073,
    Positive_Cases: 1,
    Coordinates: [
      32.74081,
      -116.976341
    ]
  },
  {
    Year: 2008,
    Week_Reported: 37,
    County: "San Diego",
    id: 6073,
    Positive_Cases: 1,
    Coordinates: [
      32.74081,
      -116.976341
    ]
  },
  {
    Year: 2008,
    Week_Reported: 38,
    County: "San Diego",
    id: 6073,
    Positive_Cases: 2,
    Coordinates: [
      32.74081,
      -116.976341
    ]
  },
  {
    Year: 2008,
    Week_Reported: 39,
    County: "San Diego",
    id: 6073,
    Positive_Cases: 4,
    Coordinates: [
      32.74081,
      -116.976341
    ]
  },
  {
    Year: 2008,
    Week_Reported: 40,
    County: "San Diego",
    id: 6073,
    Positive_Cases: 4,
    Coordinates: [
      32.74081,
      -116.976341
    ]
  },
  {
    Year: 2008,
    Week_Reported: 41,
    County: "San Diego",
    id: 6073,
    Positive_Cases: 1,
    Coordinates: [
      32.74081,
      -116.976341
    ]
  },
  {
    Year: 2008,
    Week_Reported: 49,
    County: "San Diego",
    id: 6073,
    Positive_Cases: 2,
    Coordinates: [
      32.74081,
      -116.976341
    ]
  },
  {
    Year: 2008,
    Week_Reported: 51,
    County: "San Diego",
    id: 6073,
    Positive_Cases: 1,
    Coordinates: [
      32.74081,
      -116.976341
    ]
  },
  {
    Year: 2008,
    Week_Reported: 53,
    County: "San Diego",
    id: 6073,
    Positive_Cases: 10,
    Coordinates: [
      32.74081,
      -116.976341
    ]
  },
  {
    Year: 2009,
    Week_Reported: 29,
    County: "San Diego",
    id: 6073,
    Positive_Cases: 1,
    Coordinates: [
      32.74081,
      -116.976341
    ]
  },
  {
    Year: 2009,
    Week_Reported: 34,
    County: "San Diego",
    id: 6073,
    Positive_Cases: 1,
    Coordinates: [
      32.74081,
      -116.976341
    ]
  },
  {
    Year: 2009,
    Week_Reported: 40,
    County: "San Diego",
    id: 6073,
    Positive_Cases: 1,
    Coordinates: [
      32.74081,
      -116.976341
    ]
  },
  {
    Year: 2009,
    Week_Reported: 41,
    County: "San Diego",
    id: 6073,
    Positive_Cases: 1,
    Coordinates: [
      32.74081,
      -116.976341
    ]
  },
  {
    Year: 2012,
    Week_Reported: 40,
    County: "San Diego",
    id: 6073,
    Positive_Cases: 1,
    Coordinates: [
      32.74081,
      -116.976341
    ]
  },
  {
    Year: 2014,
    Week_Reported: 36,
    County: "San Diego",
    id: 6073,
    Positive_Cases: 2,
    Coordinates: [
      32.74081,
      -116.976341
    ]
  },
  {
    Year: 2014,
    Week_Reported: 41,
    County: "San Diego",
    id: 6073,
    Positive_Cases: 2,
    Coordinates: [
      32.74081,
      -116.976341
    ]
  },
  {
    Year: 2014,
    Week_Reported: 42,
    County: "San Diego",
    id: 6073,
    Positive_Cases: 1,
    Coordinates: [
      32.74081,
      -116.976341
    ]
  },
  {
    Year: 2014,
    Week_Reported: 43,
    County: "San Diego",
    id: 6073,
    Positive_Cases: 1,
    Coordinates: [
      32.74081,
      -116.976341
    ]
  },
  {
    Year: 2014,
    Week_Reported: 44,
    County: "San Diego",
    id: 6073,
    Positive_Cases: 3,
    Coordinates: [
      32.74081,
      -116.976341
    ]
  },
  {
    Year: 2014,
    Week_Reported: 49,
    County: "San Diego",
    id: 6073,
    Positive_Cases: 2,
    Coordinates: [
      32.74081,
      -116.976341
    ]
  },
  {
    Year: 2015,
    Week_Reported: 35,
    County: "San Diego",
    id: 6073,
    Positive_Cases: 1,
    Coordinates: [
      32.74081,
      -116.976341
    ]
  },
  {
    Year: 2015,
    Week_Reported: 38,
    County: "San Diego",
    id: 6073,
    Positive_Cases: 3,
    Coordinates: [
      32.74081,
      -116.976341
    ]
  },
  {
    Year: 2015,
    Week_Reported: 40,
    County: "San Diego",
    id: 6073,
    Positive_Cases: 7,
    Coordinates: [
      32.74081,
      -116.976341
    ]
  },
  {
    Year: 2015,
    Week_Reported: 41,
    County: "San Diego",
    id: 6073,
    Positive_Cases: 5,
    Coordinates: [
      32.74081,
      -116.976341
    ]
  },
  {
    Year: 2015,
    Week_Reported: 42,
    County: "San Diego",
    id: 6073,
    Positive_Cases: 5,
    Coordinates: [
      32.74081,
      -116.976341
    ]
  },
  {
    Year: 2015,
    Week_Reported: 43,
    County: "San Diego",
    id: 6073,
    Positive_Cases: 7,
    Coordinates: [
      32.74081,
      -116.976341
    ]
  },
  {
    Year: 2015,
    Week_Reported: 44,
    County: "San Diego",
    id: 6073,
    Positive_Cases: 1,
    Coordinates: [
      32.74081,
      -116.976341
    ]
  },
  {
    Year: 2015,
    Week_Reported: 45,
    County: "San Diego",
    id: 6073,
    Positive_Cases: 4,
    Coordinates: [
      32.74081,
      -116.976341
    ]
  },
  {
    Year: 2015,
    Week_Reported: 47,
    County: "San Diego",
    id: 6073,
    Positive_Cases: 4,
    Coordinates: [
      32.74081,
      -116.976341
    ]
  },
  {
    Year: 2015,
    Week_Reported: 48,
    County: "San Diego",
    id: 6073,
    Positive_Cases: 1,
    Coordinates: [
      32.74081,
      -116.976341
    ]
  },
  {
    Year: 2015,
    Week_Reported: 49,
    County: "San Diego",
    id: 6073,
    Positive_Cases: 1,
    Coordinates: [
      32.74081,
      -116.976341
    ]
  },
  {
    Year: 2015,
    Week_Reported: 50,
    County: "San Diego",
    id: 6073,
    Positive_Cases: 1,
    Coordinates: [
      32.74081,
      -116.976341
    ]
  },
  {
    Year: 2015,
    Week_Reported: 52,
    County: "San Diego",
    id: 6073,
    Positive_Cases: 1,
    Coordinates: [
      32.74081,
      -116.976341
    ]
  },
  {
    Year: 2006,
    Week_Reported: 29,
    County: "San Joaquin",
    id: 6077,
    Positive_Cases: 1,
    Coordinates: [
      37.672196,
      -121.298794
    ]
  },
  {
    Year: 2006,
    Week_Reported: 33,
    County: "San Joaquin",
    id: 6077,
    Positive_Cases: 2,
    Coordinates: [
      37.672196,
      -121.298794
    ]
  },
  {
    Year: 2006,
    Week_Reported: 34,
    County: "San Joaquin",
    id: 6077,
    Positive_Cases: 2,
    Coordinates: [
      37.672196,
      -121.298794
    ]
  },
  {
    Year: 2006,
    Week_Reported: 38,
    County: "San Joaquin",
    id: 6077,
    Positive_Cases: 2,
    Coordinates: [
      37.672196,
      -121.298794
    ]
  },
  {
    Year: 2006,
    Week_Reported: 39,
    County: "San Joaquin",
    id: 6077,
    Positive_Cases: 1,
    Coordinates: [
      37.672196,
      -121.298794
    ]
  },
  {
    Year: 2007,
    Week_Reported: 28,
    County: "San Joaquin",
    id: 6077,
    Positive_Cases: 1,
    Coordinates: [
      37.672196,
      -121.298794
    ]
  },
  {
    Year: 2007,
    Week_Reported: 31,
    County: "San Joaquin",
    id: 6077,
    Positive_Cases: 1,
    Coordinates: [
      37.672196,
      -121.298794
    ]
  },
  {
    Year: 2007,
    Week_Reported: 33,
    County: "San Joaquin",
    id: 6077,
    Positive_Cases: 1,
    Coordinates: [
      37.672196,
      -121.298794
    ]
  },
  {
    Year: 2007,
    Week_Reported: 36,
    County: "San Joaquin",
    id: 6077,
    Positive_Cases: 1,
    Coordinates: [
      37.672196,
      -121.298794
    ]
  },
  {
    Year: 2007,
    Week_Reported: 39,
    County: "San Joaquin",
    id: 6077,
    Positive_Cases: 2,
    Coordinates: [
      37.672196,
      -121.298794
    ]
  },
  {
    Year: 2007,
    Week_Reported: 42,
    County: "San Joaquin",
    id: 6077,
    Positive_Cases: 4,
    Coordinates: [
      37.672196,
      -121.298794
    ]
  },
  {
    Year: 2008,
    Week_Reported: 29,
    County: "San Joaquin",
    id: 6077,
    Positive_Cases: 1,
    Coordinates: [
      37.672196,
      -121.298794
    ]
  },
  {
    Year: 2008,
    Week_Reported: 33,
    County: "San Joaquin",
    id: 6077,
    Positive_Cases: 1,
    Coordinates: [
      37.672196,
      -121.298794
    ]
  },
  {
    Year: 2008,
    Week_Reported: 34,
    County: "San Joaquin",
    id: 6077,
    Positive_Cases: 3,
    Coordinates: [
      37.672196,
      -121.298794
    ]
  },
  {
    Year: 2008,
    Week_Reported: 35,
    County: "San Joaquin",
    id: 6077,
    Positive_Cases: 1,
    Coordinates: [
      37.672196,
      -121.298794
    ]
  },
  {
    Year: 2008,
    Week_Reported: 37,
    County: "San Joaquin",
    id: 6077,
    Positive_Cases: 2,
    Coordinates: [
      37.672196,
      -121.298794
    ]
  },
  {
    Year: 2008,
    Week_Reported: 38,
    County: "San Joaquin",
    id: 6077,
    Positive_Cases: 1,
    Coordinates: [
      37.672196,
      -121.298794
    ]
  },
  {
    Year: 2008,
    Week_Reported: 40,
    County: "San Joaquin",
    id: 6077,
    Positive_Cases: 1,
    Coordinates: [
      37.672196,
      -121.298794
    ]
  },
  {
    Year: 2008,
    Week_Reported: 41,
    County: "San Joaquin",
    id: 6077,
    Positive_Cases: 1,
    Coordinates: [
      37.672196,
      -121.298794
    ]
  },
  {
    Year: 2008,
    Week_Reported: 45,
    County: "San Joaquin",
    id: 6077,
    Positive_Cases: 1,
    Coordinates: [
      37.672196,
      -121.298794
    ]
  },
  {
    Year: 2009,
    Week_Reported: 36,
    County: "San Joaquin",
    id: 6077,
    Positive_Cases: 1,
    Coordinates: [
      37.672196,
      -121.298794
    ]
  },
  {
    Year: 2009,
    Week_Reported: 37,
    County: "San Joaquin",
    id: 6077,
    Positive_Cases: 1,
    Coordinates: [
      37.672196,
      -121.298794
    ]
  },
  {
    Year: 2009,
    Week_Reported: 38,
    County: "San Joaquin",
    id: 6077,
    Positive_Cases: 2,
    Coordinates: [
      37.672196,
      -121.298794
    ]
  },
  {
    Year: 2009,
    Week_Reported: 39,
    County: "San Joaquin",
    id: 6077,
    Positive_Cases: 1,
    Coordinates: [
      37.672196,
      -121.298794
    ]
  },
  {
    Year: 2009,
    Week_Reported: 43,
    County: "San Joaquin",
    id: 6077,
    Positive_Cases: 1,
    Coordinates: [
      37.672196,
      -121.298794
    ]
  },
  {
    Year: 2009,
    Week_Reported: 45,
    County: "San Joaquin",
    id: 6077,
    Positive_Cases: 1,
    Coordinates: [
      37.672196,
      -121.298794
    ]
  },
  {
    Year: 2009,
    Week_Reported: 48,
    County: "San Joaquin",
    id: 6077,
    Positive_Cases: 1,
    Coordinates: [
      37.672196,
      -121.298794
    ]
  },
  {
    Year: 2009,
    Week_Reported: 51,
    County: "San Joaquin",
    id: 6077,
    Positive_Cases: 1,
    Coordinates: [
      37.672196,
      -121.298794
    ]
  },
  {
    Year: 2009,
    Week_Reported: 52,
    County: "San Joaquin",
    id: 6077,
    Positive_Cases: 1,
    Coordinates: [
      37.672196,
      -121.298794
    ]
  },
  {
    Year: 2010,
    Week_Reported: 35,
    County: "San Joaquin",
    id: 6077,
    Positive_Cases: 1,
    Coordinates: [
      37.672196,
      -121.298794
    ]
  },
  {
    Year: 2010,
    Week_Reported: 36,
    County: "San Joaquin",
    id: 6077,
    Positive_Cases: 1,
    Coordinates: [
      37.672196,
      -121.298794
    ]
  },
  {
    Year: 2010,
    Week_Reported: 38,
    County: "San Joaquin",
    id: 6077,
    Positive_Cases: 1,
    Coordinates: [
      37.672196,
      -121.298794
    ]
  },
  {
    Year: 2010,
    Week_Reported: 39,
    County: "San Joaquin",
    id: 6077,
    Positive_Cases: 1,
    Coordinates: [
      37.672196,
      -121.298794
    ]
  },
  {
    Year: 2010,
    Week_Reported: 41,
    County: "San Joaquin",
    id: 6077,
    Positive_Cases: 1,
    Coordinates: [
      37.672196,
      -121.298794
    ]
  },
  {
    Year: 2010,
    Week_Reported: 42,
    County: "San Joaquin",
    id: 6077,
    Positive_Cases: 1,
    Coordinates: [
      37.672196,
      -121.298794
    ]
  },
  {
    Year: 2011,
    Week_Reported: 34,
    County: "San Joaquin",
    id: 6077,
    Positive_Cases: 1,
    Coordinates: [
      37.672196,
      -121.298794
    ]
  },
  {
    Year: 2011,
    Week_Reported: 37,
    County: "San Joaquin",
    id: 6077,
    Positive_Cases: 1,
    Coordinates: [
      37.672196,
      -121.298794
    ]
  },
  {
    Year: 2011,
    Week_Reported: 40,
    County: "San Joaquin",
    id: 6077,
    Positive_Cases: 1,
    Coordinates: [
      37.672196,
      -121.298794
    ]
  },
  {
    Year: 2011,
    Week_Reported: 42,
    County: "San Joaquin",
    id: 6077,
    Positive_Cases: 1,
    Coordinates: [
      37.672196,
      -121.298794
    ]
  },
  {
    Year: 2011,
    Week_Reported: 44,
    County: "San Joaquin",
    id: 6077,
    Positive_Cases: 1,
    Coordinates: [
      37.672196,
      -121.298794
    ]
  },
  {
    Year: 2012,
    Week_Reported: 32,
    County: "San Joaquin",
    id: 6077,
    Positive_Cases: 1,
    Coordinates: [
      37.672196,
      -121.298794
    ]
  },
  {
    Year: 2012,
    Week_Reported: 33,
    County: "San Joaquin",
    id: 6077,
    Positive_Cases: 1,
    Coordinates: [
      37.672196,
      -121.298794
    ]
  },
  {
    Year: 2012,
    Week_Reported: 37,
    County: "San Joaquin",
    id: 6077,
    Positive_Cases: 2,
    Coordinates: [
      37.672196,
      -121.298794
    ]
  },
  {
    Year: 2012,
    Week_Reported: 38,
    County: "San Joaquin",
    id: 6077,
    Positive_Cases: 2,
    Coordinates: [
      37.672196,
      -121.298794
    ]
  },
  {
    Year: 2012,
    Week_Reported: 39,
    County: "San Joaquin",
    id: 6077,
    Positive_Cases: 1,
    Coordinates: [
      37.672196,
      -121.298794
    ]
  },
  {
    Year: 2012,
    Week_Reported: 40,
    County: "San Joaquin",
    id: 6077,
    Positive_Cases: 2,
    Coordinates: [
      37.672196,
      -121.298794
    ]
  },
  {
    Year: 2012,
    Week_Reported: 44,
    County: "San Joaquin",
    id: 6077,
    Positive_Cases: 1,
    Coordinates: [
      37.672196,
      -121.298794
    ]
  },
  {
    Year: 2012,
    Week_Reported: 48,
    County: "San Joaquin",
    id: 6077,
    Positive_Cases: 1,
    Coordinates: [
      37.672196,
      -121.298794
    ]
  },
  {
    Year: 2012,
    Week_Reported: 49,
    County: "San Joaquin",
    id: 6077,
    Positive_Cases: 2,
    Coordinates: [
      37.672196,
      -121.298794
    ]
  },
  {
    Year: 2013,
    Week_Reported: 33,
    County: "San Joaquin",
    id: 6077,
    Positive_Cases: 2,
    Coordinates: [
      37.672196,
      -121.298794
    ]
  },
  {
    Year: 2013,
    Week_Reported: 34,
    County: "San Joaquin",
    id: 6077,
    Positive_Cases: 1,
    Coordinates: [
      37.672196,
      -121.298794
    ]
  },
  {
    Year: 2013,
    Week_Reported: 38,
    County: "San Joaquin",
    id: 6077,
    Positive_Cases: 2,
    Coordinates: [
      37.672196,
      -121.298794
    ]
  },
  {
    Year: 2013,
    Week_Reported: 41,
    County: "San Joaquin",
    id: 6077,
    Positive_Cases: 1,
    Coordinates: [
      37.672196,
      -121.298794
    ]
  },
  {
    Year: 2013,
    Week_Reported: 44,
    County: "San Joaquin",
    id: 6077,
    Positive_Cases: 1,
    Coordinates: [
      37.672196,
      -121.298794
    ]
  },
  {
    Year: 2013,
    Week_Reported: 48,
    County: "San Joaquin",
    id: 6077,
    Positive_Cases: 1,
    Coordinates: [
      37.672196,
      -121.298794
    ]
  },
  {
    Year: 2014,
    Week_Reported: 31,
    County: "San Joaquin",
    id: 6077,
    Positive_Cases: 1,
    Coordinates: [
      37.672196,
      -121.298794
    ]
  },
  {
    Year: 2014,
    Week_Reported: 35,
    County: "San Joaquin",
    id: 6077,
    Positive_Cases: 1,
    Coordinates: [
      37.672196,
      -121.298794
    ]
  },
  {
    Year: 2014,
    Week_Reported: 36,
    County: "San Joaquin",
    id: 6077,
    Positive_Cases: 1,
    Coordinates: [
      37.672196,
      -121.298794
    ]
  },
  {
    Year: 2014,
    Week_Reported: 37,
    County: "San Joaquin",
    id: 6077,
    Positive_Cases: 1,
    Coordinates: [
      37.672196,
      -121.298794
    ]
  },
  {
    Year: 2014,
    Week_Reported: 38,
    County: "San Joaquin",
    id: 6077,
    Positive_Cases: 1,
    Coordinates: [
      37.672196,
      -121.298794
    ]
  },
  {
    Year: 2014,
    Week_Reported: 40,
    County: "San Joaquin",
    id: 6077,
    Positive_Cases: 2,
    Coordinates: [
      37.672196,
      -121.298794
    ]
  },
  {
    Year: 2014,
    Week_Reported: 41,
    County: "San Joaquin",
    id: 6077,
    Positive_Cases: 1,
    Coordinates: [
      37.672196,
      -121.298794
    ]
  },
  {
    Year: 2014,
    Week_Reported: 45,
    County: "San Joaquin",
    id: 6077,
    Positive_Cases: 1,
    Coordinates: [
      37.672196,
      -121.298794
    ]
  },
  {
    Year: 2015,
    Week_Reported: 34,
    County: "San Joaquin",
    id: 6077,
    Positive_Cases: 1,
    Coordinates: [
      37.672196,
      -121.298794
    ]
  },
  {
    Year: 2015,
    Week_Reported: 38,
    County: "San Joaquin",
    id: 6077,
    Positive_Cases: 1,
    Coordinates: [
      37.672196,
      -121.298794
    ]
  },
  {
    Year: 2006,
    Week_Reported: 35,
    County: "San Luis Obispo",
    id: 6079,
    Positive_Cases: 1,
    Coordinates: [
      35.265573,
      -120.62122
    ]
  },
  {
    Year: 2006,
    Week_Reported: 33,
    County: "Santa Clara",
    id: 6085,
    Positive_Cases: 1,
    Coordinates: [
      37.238842,
      -121.885066
    ]
  },
  {
    Year: 2006,
    Week_Reported: 35,
    County: "Santa Clara",
    id: 6085,
    Positive_Cases: 2,
    Coordinates: [
      37.238842,
      -121.885066
    ]
  },
  {
    Year: 2006,
    Week_Reported: 36,
    County: "Santa Clara",
    id: 6085,
    Positive_Cases: 1,
    Coordinates: [
      37.238842,
      -121.885066
    ]
  },
  {
    Year: 2006,
    Week_Reported: 39,
    County: "Santa Clara",
    id: 6085,
    Positive_Cases: 1,
    Coordinates: [
      37.238842,
      -121.885066
    ]
  },
  {
    Year: 2007,
    Week_Reported: 31,
    County: "Santa Clara",
    id: 6085,
    Positive_Cases: 1,
    Coordinates: [
      37.238842,
      -121.885066
    ]
  },
  {
    Year: 2007,
    Week_Reported: 32,
    County: "Santa Clara",
    id: 6085,
    Positive_Cases: 1,
    Coordinates: [
      37.238842,
      -121.885066
    ]
  },
  {
    Year: 2007,
    Week_Reported: 40,
    County: "Santa Clara",
    id: 6085,
    Positive_Cases: 2,
    Coordinates: [
      37.238842,
      -121.885066
    ]
  },
  {
    Year: 2008,
    Week_Reported: 37,
    County: "Santa Clara",
    id: 6085,
    Positive_Cases: 1,
    Coordinates: [
      37.238842,
      -121.885066
    ]
  },
  {
    Year: 2011,
    Week_Reported: 43,
    County: "Santa Clara",
    id: 6085,
    Positive_Cases: 1,
    Coordinates: [
      37.238842,
      -121.885066
    ]
  },
  {
    Year: 2013,
    Week_Reported: 33,
    County: "Santa Clara",
    id: 6085,
    Positive_Cases: 1,
    Coordinates: [
      37.238842,
      -121.885066
    ]
  },
  {
    Year: 2013,
    Week_Reported: 41,
    County: "Santa Clara",
    id: 6085,
    Positive_Cases: 1,
    Coordinates: [
      37.238842,
      -121.885066
    ]
  },
  {
    Year: 2014,
    Week_Reported: 32,
    County: "Santa Clara",
    id: 6085,
    Positive_Cases: 1,
    Coordinates: [
      37.238842,
      -121.885066
    ]
  },
  {
    Year: 2014,
    Week_Reported: 33,
    County: "Santa Clara",
    id: 6085,
    Positive_Cases: 2,
    Coordinates: [
      37.238842,
      -121.885066
    ]
  },
  {
    Year: 2014,
    Week_Reported: 36,
    County: "Santa Clara",
    id: 6085,
    Positive_Cases: 2,
    Coordinates: [
      37.238842,
      -121.885066
    ]
  },
  {
    Year: 2014,
    Week_Reported: 39,
    County: "Santa Clara",
    id: 6085,
    Positive_Cases: 1,
    Coordinates: [
      37.238842,
      -121.885066
    ]
  },
  {
    Year: 2014,
    Week_Reported: 40,
    County: "Santa Clara",
    id: 6085,
    Positive_Cases: 1,
    Coordinates: [
      37.238842,
      -121.885066
    ]
  },
  {
    Year: 2014,
    Week_Reported: 41,
    County: "Santa Clara",
    id: 6085,
    Positive_Cases: 1,
    Coordinates: [
      37.238842,
      -121.885066
    ]
  },
  {
    Year: 2014,
    Week_Reported: 44,
    County: "Santa Clara",
    id: 6085,
    Positive_Cases: 2,
    Coordinates: [
      37.238842,
      -121.885066
    ]
  },
  {
    Year: 2015,
    Week_Reported: 32,
    County: "Santa Clara",
    id: 6085,
    Positive_Cases: 1,
    Coordinates: [
      37.238842,
      -121.885066
    ]
  },
  {
    Year: 2015,
    Week_Reported: 35,
    County: "Santa Clara",
    id: 6085,
    Positive_Cases: 1,
    Coordinates: [
      37.238842,
      -121.885066
    ]
  },
  {
    Year: 2015,
    Week_Reported: 36,
    County: "Santa Clara",
    id: 6085,
    Positive_Cases: 1,
    Coordinates: [
      37.238842,
      -121.885066
    ]
  },
  {
    Year: 2015,
    Week_Reported: 39,
    County: "Santa Clara",
    id: 6085,
    Positive_Cases: 2,
    Coordinates: [
      37.238842,
      -121.885066
    ]
  },
  {
    Year: 2015,
    Week_Reported: 42,
    County: "Santa Clara",
    id: 6085,
    Positive_Cases: 1,
    Coordinates: [
      37.238842,
      -121.885066
    ]
  },
  {
    Year: 2015,
    Week_Reported: 44,
    County: "Santa Clara",
    id: 6085,
    Positive_Cases: 1,
    Coordinates: [
      37.238842,
      -121.885066
    ]
  },
  {
    Year: 2015,
    Week_Reported: 46,
    County: "Santa Clara",
    id: 6085,
    Positive_Cases: 1,
    Coordinates: [
      37.238842,
      -121.885066
    ]
  },
  {
    Year: 2006,
    Week_Reported: 35,
    County: "Shasta",
    id: 6089,
    Positive_Cases: 1,
    Coordinates: [
      40.675738,
      -122.456982
    ]
  },
  {
    Year: 2006,
    Week_Reported: 36,
    County: "Shasta",
    id: 6089,
    Positive_Cases: 1,
    Coordinates: [
      40.675738,
      -122.456982
    ]
  },
  {
    Year: 2006,
    Week_Reported: 41,
    County: "Shasta",
    id: 6089,
    Positive_Cases: 1,
    Coordinates: [
      40.675738,
      -122.456982
    ]
  },
  {
    Year: 2006,
    Week_Reported: 42,
    County: "Shasta",
    id: 6089,
    Positive_Cases: 1,
    Coordinates: [
      40.675738,
      -122.456982
    ]
  },
  {
    Year: 2007,
    Week_Reported: 30,
    County: "Shasta",
    id: 6089,
    Positive_Cases: 1,
    Coordinates: [
      40.675738,
      -122.456982
    ]
  },
  {
    Year: 2007,
    Week_Reported: 35,
    County: "Shasta",
    id: 6089,
    Positive_Cases: 1,
    Coordinates: [
      40.675738,
      -122.456982
    ]
  },
  {
    Year: 2007,
    Week_Reported: 36,
    County: "Shasta",
    id: 6089,
    Positive_Cases: 2,
    Coordinates: [
      40.675738,
      -122.456982
    ]
  },
  {
    Year: 2007,
    Week_Reported: 37,
    County: "Shasta",
    id: 6089,
    Positive_Cases: 2,
    Coordinates: [
      40.675738,
      -122.456982
    ]
  },
  {
    Year: 2007,
    Week_Reported: 38,
    County: "Shasta",
    id: 6089,
    Positive_Cases: 1,
    Coordinates: [
      40.675738,
      -122.456982
    ]
  },
  {
    Year: 2007,
    Week_Reported: 39,
    County: "Shasta",
    id: 6089,
    Positive_Cases: 1,
    Coordinates: [
      40.675738,
      -122.456982
    ]
  },
  {
    Year: 2007,
    Week_Reported: 41,
    County: "Shasta",
    id: 6089,
    Positive_Cases: 1,
    Coordinates: [
      40.675738,
      -122.456982
    ]
  },
  {
    Year: 2008,
    Week_Reported: 35,
    County: "Shasta",
    id: 6089,
    Positive_Cases: 1,
    Coordinates: [
      40.675738,
      -122.456982
    ]
  },
  {
    Year: 2012,
    Week_Reported: 42,
    County: "Shasta",
    id: 6089,
    Positive_Cases: 1,
    Coordinates: [
      40.675738,
      -122.456982
    ]
  },
  {
    Year: 2013,
    Week_Reported: 43,
    County: "Shasta",
    id: 6089,
    Positive_Cases: 1,
    Coordinates: [
      40.675738,
      -122.456982
    ]
  },
  {
    Year: 2014,
    Week_Reported: 32,
    County: "Shasta",
    id: 6089,
    Positive_Cases: 1,
    Coordinates: [
      40.675738,
      -122.456982
    ]
  },
  {
    Year: 2014,
    Week_Reported: 37,
    County: "Shasta",
    id: 6089,
    Positive_Cases: 1,
    Coordinates: [
      40.675738,
      -122.456982
    ]
  },
  {
    Year: 2015,
    Week_Reported: 36,
    County: "Shasta",
    id: 6089,
    Positive_Cases: 2,
    Coordinates: [
      40.675738,
      -122.456982
    ]
  },
  {
    Year: 2015,
    Week_Reported: 40,
    County: "Shasta",
    id: 6089,
    Positive_Cases: 1,
    Coordinates: [
      40.675738,
      -122.456982
    ]
  },
  {
    Year: 2006,
    Week_Reported: 33,
    County: "Solano",
    id: 6095,
    Positive_Cases: 2,
    Coordinates: [
      38.1012,
      -122.032061
    ]
  },
  {
    Year: 2006,
    Week_Reported: 39,
    County: "Solano",
    id: 6095,
    Positive_Cases: 4,
    Coordinates: [
      38.1012,
      -122.032061
    ]
  },
  {
    Year: 2007,
    Week_Reported: 34,
    County: "Solano",
    id: 6095,
    Positive_Cases: 1,
    Coordinates: [
      38.1012,
      -122.032061
    ]
  },
  {
    Year: 2008,
    Week_Reported: 33,
    County: "Solano",
    id: 6095,
    Positive_Cases: 1,
    Coordinates: [
      38.1012,
      -122.032061
    ]
  },
  {
    Year: 2012,
    Week_Reported: 37,
    County: "Solano",
    id: 6095,
    Positive_Cases: 1,
    Coordinates: [
      38.1012,
      -122.032061
    ]
  },
  {
    Year: 2012,
    Week_Reported: 44,
    County: "Solano",
    id: 6095,
    Positive_Cases: 1,
    Coordinates: [
      38.1012,
      -122.032061
    ]
  },
  {
    Year: 2013,
    Week_Reported: 31,
    County: "Solano",
    id: 6095,
    Positive_Cases: 1,
    Coordinates: [
      38.1012,
      -122.032061
    ]
  },
  {
    Year: 2014,
    Week_Reported: 27,
    County: "Solano",
    id: 6095,
    Positive_Cases: 1,
    Coordinates: [
      38.1012,
      -122.032061
    ]
  },
  {
    Year: 2014,
    Week_Reported: 52,
    County: "Solano",
    id: 6095,
    Positive_Cases: 4,
    Coordinates: [
      38.1012,
      -122.032061
    ]
  },
  {
    Year: 2015,
    Week_Reported: 39,
    County: "Solano",
    id: 6095,
    Positive_Cases: 1,
    Coordinates: [
      38.1012,
      -122.032061
    ]
  },
  {
    Year: 2006,
    Week_Reported: 29,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 1,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2006,
    Week_Reported: 33,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 2,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2006,
    Week_Reported: 34,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 1,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2006,
    Week_Reported: 35,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 2,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2006,
    Week_Reported: 36,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 1,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2006,
    Week_Reported: 37,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 2,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2006,
    Week_Reported: 39,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 1,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2006,
    Week_Reported: 41,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 1,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2007,
    Week_Reported: 29,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 1,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2007,
    Week_Reported: 30,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 1,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2007,
    Week_Reported: 31,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 2,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2007,
    Week_Reported: 33,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 2,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2007,
    Week_Reported: 34,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 4,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2007,
    Week_Reported: 36,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 1,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2007,
    Week_Reported: 37,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 1,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2007,
    Week_Reported: 38,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 1,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2007,
    Week_Reported: 39,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 3,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2007,
    Week_Reported: 40,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 1,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2007,
    Week_Reported: 41,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 1,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2007,
    Week_Reported: 42,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 1,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2007,
    Week_Reported: 43,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 1,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2007,
    Week_Reported: 44,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 1,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2008,
    Week_Reported: 27,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 2,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2008,
    Week_Reported: 30,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 1,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2008,
    Week_Reported: 31,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 1,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2008,
    Week_Reported: 32,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 1,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2008,
    Week_Reported: 35,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 2,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2008,
    Week_Reported: 36,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 3,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2008,
    Week_Reported: 37,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 1,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2008,
    Week_Reported: 38,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 2,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2008,
    Week_Reported: 39,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 3,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2008,
    Week_Reported: 41,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 1,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2009,
    Week_Reported: 34,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 2,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2009,
    Week_Reported: 35,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 1,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2009,
    Week_Reported: 36,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 2,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2009,
    Week_Reported: 37,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 4,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2009,
    Week_Reported: 38,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 2,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2009,
    Week_Reported: 39,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 1,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2009,
    Week_Reported: 43,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 1,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2010,
    Week_Reported: 28,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 2,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2010,
    Week_Reported: 29,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 1,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2010,
    Week_Reported: 31,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 1,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2010,
    Week_Reported: 32,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 2,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2010,
    Week_Reported: 33,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 1,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2010,
    Week_Reported: 36,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 1,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2010,
    Week_Reported: 40,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 1,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2010,
    Week_Reported: 42,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 1,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2010,
    Week_Reported: 43,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 1,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2010,
    Week_Reported: 48,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 1,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2011,
    Week_Reported: 31,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 2,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2011,
    Week_Reported: 34,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 1,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2011,
    Week_Reported: 35,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 4,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2011,
    Week_Reported: 39,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 1,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2011,
    Week_Reported: 40,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 1,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2011,
    Week_Reported: 43,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 1,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2011,
    Week_Reported: 45,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 1,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2012,
    Week_Reported: 28,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 1,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2012,
    Week_Reported: 30,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 1,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2012,
    Week_Reported: 31,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 2,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2012,
    Week_Reported: 33,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 2,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2012,
    Week_Reported: 34,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 4,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2012,
    Week_Reported: 35,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 2,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2012,
    Week_Reported: 38,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 1,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2012,
    Week_Reported: 39,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 4,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2012,
    Week_Reported: 40,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 4,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2012,
    Week_Reported: 42,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 1,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2012,
    Week_Reported: 44,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 1,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2012,
    Week_Reported: 45,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 1,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2012,
    Week_Reported: 46,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 1,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2012,
    Week_Reported: 53,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 1,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2013,
    Week_Reported: 33,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 1,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2013,
    Week_Reported: 35,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 2,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2013,
    Week_Reported: 38,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 3,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2013,
    Week_Reported: 39,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 2,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2013,
    Week_Reported: 40,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 4,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2013,
    Week_Reported: 41,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 3,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2013,
    Week_Reported: 42,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 1,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2013,
    Week_Reported: 49,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 1,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2013,
    Week_Reported: 53,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 1,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2014,
    Week_Reported: 27,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 2,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2014,
    Week_Reported: 29,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 1,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2014,
    Week_Reported: 30,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 1,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2014,
    Week_Reported: 31,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 1,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2014,
    Week_Reported: 32,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 2,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2014,
    Week_Reported: 33,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 6,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2014,
    Week_Reported: 34,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 4,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2014,
    Week_Reported: 36,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 3,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2014,
    Week_Reported: 37,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 1,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2014,
    Week_Reported: 38,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 3,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2014,
    Week_Reported: 39,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 2,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2014,
    Week_Reported: 40,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 3,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2014,
    Week_Reported: 42,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 2,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2014,
    Week_Reported: 49,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 1,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2014,
    Week_Reported: 50,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 1,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2015,
    Week_Reported: 34,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 3,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2015,
    Week_Reported: 37,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 1,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2015,
    Week_Reported: 38,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 5,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2015,
    Week_Reported: 41,
    County: "Stanislaus",
    id: 6099,
    Positive_Cases: 3,
    Coordinates: [
      37.561889,
      -120.967976
    ]
  },
  {
    Year: 2006,
    Week_Reported: 29,
    County: "Sutter",
    id: 6101,
    Positive_Cases: 1,
    Coordinates: [
      38.837134,
      -121.551933
    ]
  },
  {
    Year: 2006,
    Week_Reported: 32,
    County: "Sutter",
    id: 6101,
    Positive_Cases: 2,
    Coordinates: [
      38.837134,
      -121.551933
    ]
  },
  {
    Year: 2006,
    Week_Reported: 34,
    County: "Sutter",
    id: 6101,
    Positive_Cases: 3,
    Coordinates: [
      38.837134,
      -121.551933
    ]
  },
  {
    Year: 2006,
    Week_Reported: 35,
    County: "Sutter",
    id: 6101,
    Positive_Cases: 3,
    Coordinates: [
      38.837134,
      -121.551933
    ]
  },
  {
    Year: 2006,
    Week_Reported: 37,
    County: "Sutter",
    id: 6101,
    Positive_Cases: 2,
    Coordinates: [
      38.837134,
      -121.551933
    ]
  },
  {
    Year: 2006,
    Week_Reported: 40,
    County: "Sutter",
    id: 6101,
    Positive_Cases: 1,
    Coordinates: [
      38.837134,
      -121.551933
    ]
  },
  {
    Year: 2007,
    Week_Reported: 32,
    County: "Sutter",
    id: 6101,
    Positive_Cases: 1,
    Coordinates: [
      38.837134,
      -121.551933
    ]
  },
  {
    Year: 2007,
    Week_Reported: 33,
    County: "Sutter",
    id: 6101,
    Positive_Cases: 1,
    Coordinates: [
      38.837134,
      -121.551933
    ]
  },
  {
    Year: 2007,
    Week_Reported: 48,
    County: "Sutter",
    id: 6101,
    Positive_Cases: 1,
    Coordinates: [
      38.837134,
      -121.551933
    ]
  },
  {
    Year: 2012,
    Week_Reported: 34,
    County: "Sutter",
    id: 6101,
    Positive_Cases: 1,
    Coordinates: [
      38.837134,
      -121.551933
    ]
  },
  {
    Year: 2012,
    Week_Reported: 37,
    County: "Sutter",
    id: 6101,
    Positive_Cases: 4,
    Coordinates: [
      38.837134,
      -121.551933
    ]
  },
  {
    Year: 2012,
    Week_Reported: 38,
    County: "Sutter",
    id: 6101,
    Positive_Cases: 1,
    Coordinates: [
      38.837134,
      -121.551933
    ]
  },
  {
    Year: 2012,
    Week_Reported: 43,
    County: "Sutter",
    id: 6101,
    Positive_Cases: 2,
    Coordinates: [
      38.837134,
      -121.551933
    ]
  },
  {
    Year: 2013,
    Week_Reported: 34,
    County: "Sutter",
    id: 6101,
    Positive_Cases: 1,
    Coordinates: [
      38.837134,
      -121.551933
    ]
  },
  {
    Year: 2013,
    Week_Reported: 35,
    County: "Sutter",
    id: 6101,
    Positive_Cases: 2,
    Coordinates: [
      38.837134,
      -121.551933
    ]
  },
  {
    Year: 2013,
    Week_Reported: 36,
    County: "Sutter",
    id: 6101,
    Positive_Cases: 2,
    Coordinates: [
      38.837134,
      -121.551933
    ]
  },
  {
    Year: 2013,
    Week_Reported: 38,
    County: "Sutter",
    id: 6101,
    Positive_Cases: 2,
    Coordinates: [
      38.837134,
      -121.551933
    ]
  },
  {
    Year: 2013,
    Week_Reported: 40,
    County: "Sutter",
    id: 6101,
    Positive_Cases: 2,
    Coordinates: [
      38.837134,
      -121.551933
    ]
  },
  {
    Year: 2013,
    Week_Reported: 41,
    County: "Sutter",
    id: 6101,
    Positive_Cases: 1,
    Coordinates: [
      38.837134,
      -121.551933
    ]
  },
  {
    Year: 2014,
    Week_Reported: 34,
    County: "Sutter",
    id: 6101,
    Positive_Cases: 1,
    Coordinates: [
      38.837134,
      -121.551933
    ]
  },
  {
    Year: 2014,
    Week_Reported: 36,
    County: "Sutter",
    id: 6101,
    Positive_Cases: 1,
    Coordinates: [
      38.837134,
      -121.551933
    ]
  },
  {
    Year: 2014,
    Week_Reported: 40,
    County: "Sutter",
    id: 6101,
    Positive_Cases: 2,
    Coordinates: [
      38.837134,
      -121.551933
    ]
  },
  {
    Year: 2014,
    Week_Reported: 44,
    County: "Sutter",
    id: 6101,
    Positive_Cases: 1,
    Coordinates: [
      38.837134,
      -121.551933
    ]
  },
  {
    Year: 2014,
    Week_Reported: 45,
    County: "Sutter",
    id: 6101,
    Positive_Cases: 1,
    Coordinates: [
      38.837134,
      -121.551933
    ]
  },
  {
    Year: 2014,
    Week_Reported: 46,
    County: "Sutter",
    id: 6101,
    Positive_Cases: 1,
    Coordinates: [
      38.837134,
      -121.551933
    ]
  },
  {
    Year: 2014,
    Week_Reported: 52,
    County: "Sutter",
    id: 6101,
    Positive_Cases: 1,
    Coordinates: [
      38.837134,
      -121.551933
    ]
  },
  {
    Year: 2015,
    Week_Reported: 34,
    County: "Sutter",
    id: 6101,
    Positive_Cases: 2,
    Coordinates: [
      38.837134,
      -121.551933
    ]
  },
  {
    Year: 2006,
    Week_Reported: 36,
    County: "Tehama",
    id: 6103,
    Positive_Cases: 2,
    Coordinates: [
      40.125399,
      -122.135411
    ]
  },
  {
    Year: 2006,
    Week_Reported: 38,
    County: "Tehama",
    id: 6103,
    Positive_Cases: 1,
    Coordinates: [
      40.125399,
      -122.135411
    ]
  },
  {
    Year: 2007,
    Week_Reported: 33,
    County: "Tehama",
    id: 6103,
    Positive_Cases: 3,
    Coordinates: [
      40.125399,
      -122.135411
    ]
  },
  {
    Year: 2007,
    Week_Reported: 36,
    County: "Tehama",
    id: 6103,
    Positive_Cases: 1,
    Coordinates: [
      40.125399,
      -122.135411
    ]
  },
  {
    Year: 2008,
    Week_Reported: 36,
    County: "Tehama",
    id: 6103,
    Positive_Cases: 1,
    Coordinates: [
      40.125399,
      -122.135411
    ]
  },
  {
    Year: 2008,
    Week_Reported: 46,
    County: "Tehama",
    id: 6103,
    Positive_Cases: 3,
    Coordinates: [
      40.125399,
      -122.135411
    ]
  },
  {
    Year: 2011,
    Week_Reported: 46,
    County: "Tehama",
    id: 6103,
    Positive_Cases: 1,
    Coordinates: [
      40.125399,
      -122.135411
    ]
  },
  {
    Year: 2012,
    Week_Reported: 37,
    County: "Tehama",
    id: 6103,
    Positive_Cases: 1,
    Coordinates: [
      40.125399,
      -122.135411
    ]
  },
  {
    Year: 2012,
    Week_Reported: 42,
    County: "Tehama",
    id: 6103,
    Positive_Cases: 1,
    Coordinates: [
      40.125399,
      -122.135411
    ]
  },
  {
    Year: 2012,
    Week_Reported: 44,
    County: "Tehama",
    id: 6103,
    Positive_Cases: 2,
    Coordinates: [
      40.125399,
      -122.135411
    ]
  },
  {
    Year: 2013,
    Week_Reported: 47,
    County: "Tehama",
    id: 6103,
    Positive_Cases: 1,
    Coordinates: [
      40.125399,
      -122.135411
    ]
  },
  {
    Year: 2013,
    Week_Reported: 48,
    County: "Tehama",
    id: 6103,
    Positive_Cases: 1,
    Coordinates: [
      40.125399,
      -122.135411
    ]
  },
  {
    Year: 2013,
    Week_Reported: 49,
    County: "Tehama",
    id: 6103,
    Positive_Cases: 1,
    Coordinates: [
      40.125399,
      -122.135411
    ]
  },
  {
    Year: 2014,
    Week_Reported: 35,
    County: "Tehama",
    id: 6103,
    Positive_Cases: 1,
    Coordinates: [
      40.125399,
      -122.135411
    ]
  },
  {
    Year: 2014,
    Week_Reported: 37,
    County: "Tehama",
    id: 6103,
    Positive_Cases: 1,
    Coordinates: [
      40.125399,
      -122.135411
    ]
  },
  {
    Year: 2014,
    Week_Reported: 38,
    County: "Tehama",
    id: 6103,
    Positive_Cases: 1,
    Coordinates: [
      40.125399,
      -122.135411
    ]
  },
  {
    Year: 2014,
    Week_Reported: 41,
    County: "Tehama",
    id: 6103,
    Positive_Cases: 1,
    Coordinates: [
      40.125399,
      -122.135411
    ]
  },
  {
    Year: 2015,
    Week_Reported: 33,
    County: "Tehama",
    id: 6103,
    Positive_Cases: 2,
    Coordinates: [
      40.125399,
      -122.135411
    ]
  },
  {
    Year: 2015,
    Week_Reported: 34,
    County: "Tehama",
    id: 6103,
    Positive_Cases: 1,
    Coordinates: [
      40.125399,
      -122.135411
    ]
  },
  {
    Year: 2015,
    Week_Reported: 37,
    County: "Tehama",
    id: 6103,
    Positive_Cases: 1,
    Coordinates: [
      40.125399,
      -122.135411
    ]
  },
  {
    Year: 2015,
    Week_Reported: 39,
    County: "Tehama",
    id: 6103,
    Positive_Cases: 1,
    Coordinates: [
      40.125399,
      -122.135411
    ]
  },
  {
    Year: 2006,
    Week_Reported: 36,
    County: "Tulare",
    id: 6107,
    Positive_Cases: 3,
    Coordinates: [
      35.85829,
      -119.303735
    ]
  },
  {
    Year: 2006,
    Week_Reported: 37,
    County: "Tulare",
    id: 6107,
    Positive_Cases: 1,
    Coordinates: [
      35.85829,
      -119.303735
    ]
  },
  {
    Year: 2006,
    Week_Reported: 40,
    County: "Tulare",
    id: 6107,
    Positive_Cases: 1,
    Coordinates: [
      35.85829,
      -119.303735
    ]
  },
  {
    Year: 2006,
    Week_Reported: 41,
    County: "Tulare",
    id: 6107,
    Positive_Cases: 2,
    Coordinates: [
      35.85829,
      -119.303735
    ]
  },
  {
    Year: 2006,
    Week_Reported: 42,
    County: "Tulare",
    id: 6107,
    Positive_Cases: 1,
    Coordinates: [
      35.85829,
      -119.303735
    ]
  },
  {
    Year: 2007,
    Week_Reported: 38,
    County: "Tulare",
    id: 6107,
    Positive_Cases: 7,
    Coordinates: [
      35.85829,
      -119.303735
    ]
  },
  {
    Year: 2007,
    Week_Reported: 40,
    County: "Tulare",
    id: 6107,
    Positive_Cases: 3,
    Coordinates: [
      35.85829,
      -119.303735
    ]
  },
  {
    Year: 2008,
    Week_Reported: 25,
    County: "Tulare",
    id: 6107,
    Positive_Cases: 1,
    Coordinates: [
      35.85829,
      -119.303735
    ]
  },
  {
    Year: 2008,
    Week_Reported: 38,
    County: "Tulare",
    id: 6107,
    Positive_Cases: 1,
    Coordinates: [
      35.85829,
      -119.303735
    ]
  },
  {
    Year: 2008,
    Week_Reported: 46,
    County: "Tulare",
    id: 6107,
    Positive_Cases: 2,
    Coordinates: [
      35.85829,
      -119.303735
    ]
  },
  {
    Year: 2008,
    Week_Reported: 53,
    County: "Tulare",
    id: 6107,
    Positive_Cases: 1,
    Coordinates: [
      35.85829,
      -119.303735
    ]
  },
  {
    Year: 2009,
    Week_Reported: 40,
    County: "Tulare",
    id: 6107,
    Positive_Cases: 4,
    Coordinates: [
      35.85829,
      -119.303735
    ]
  },
  {
    Year: 2010,
    Week_Reported: 31,
    County: "Tulare",
    id: 6107,
    Positive_Cases: 1,
    Coordinates: [
      35.85829,
      -119.303735
    ]
  },
  {
    Year: 2010,
    Week_Reported: 34,
    County: "Tulare",
    id: 6107,
    Positive_Cases: 1,
    Coordinates: [
      35.85829,
      -119.303735
    ]
  },
  {
    Year: 2010,
    Week_Reported: 39,
    County: "Tulare",
    id: 6107,
    Positive_Cases: 3,
    Coordinates: [
      35.85829,
      -119.303735
    ]
  },
  {
    Year: 2010,
    Week_Reported: 41,
    County: "Tulare",
    id: 6107,
    Positive_Cases: 1,
    Coordinates: [
      35.85829,
      -119.303735
    ]
  },
  {
    Year: 2010,
    Week_Reported: 42,
    County: "Tulare",
    id: 6107,
    Positive_Cases: 3,
    Coordinates: [
      35.85829,
      -119.303735
    ]
  },
  {
    Year: 2010,
    Week_Reported: 43,
    County: "Tulare",
    id: 6107,
    Positive_Cases: 2,
    Coordinates: [
      35.85829,
      -119.303735
    ]
  },
  {
    Year: 2010,
    Week_Reported: 48,
    County: "Tulare",
    id: 6107,
    Positive_Cases: 1,
    Coordinates: [
      35.85829,
      -119.303735
    ]
  },
  {
    Year: 2011,
    Week_Reported: 31,
    County: "Tulare",
    id: 6107,
    Positive_Cases: 2,
    Coordinates: [
      35.85829,
      -119.303735
    ]
  },
  {
    Year: 2011,
    Week_Reported: 37,
    County: "Tulare",
    id: 6107,
    Positive_Cases: 2,
    Coordinates: [
      35.85829,
      -119.303735
    ]
  },
  {
    Year: 2011,
    Week_Reported: 38,
    County: "Tulare",
    id: 6107,
    Positive_Cases: 1,
    Coordinates: [
      35.85829,
      -119.303735
    ]
  },
  {
    Year: 2011,
    Week_Reported: 39,
    County: "Tulare",
    id: 6107,
    Positive_Cases: 3,
    Coordinates: [
      35.85829,
      -119.303735
    ]
  },
  {
    Year: 2011,
    Week_Reported: 42,
    County: "Tulare",
    id: 6107,
    Positive_Cases: 1,
    Coordinates: [
      35.85829,
      -119.303735
    ]
  },
  {
    Year: 2011,
    Week_Reported: 45,
    County: "Tulare",
    id: 6107,
    Positive_Cases: 1,
    Coordinates: [
      35.85829,
      -119.303735
    ]
  },
  {
    Year: 2011,
    Week_Reported: 48,
    County: "Tulare",
    id: 6107,
    Positive_Cases: 1,
    Coordinates: [
      35.85829,
      -119.303735
    ]
  },
  {
    Year: 2012,
    Week_Reported: 34,
    County: "Tulare",
    id: 6107,
    Positive_Cases: 2,
    Coordinates: [
      35.85829,
      -119.303735
    ]
  },
  {
    Year: 2012,
    Week_Reported: 36,
    County: "Tulare",
    id: 6107,
    Positive_Cases: 1,
    Coordinates: [
      35.85829,
      -119.303735
    ]
  },
  {
    Year: 2012,
    Week_Reported: 41,
    County: "Tulare",
    id: 6107,
    Positive_Cases: 4,
    Coordinates: [
      35.85829,
      -119.303735
    ]
  },
  {
    Year: 2013,
    Week_Reported: 38,
    County: "Tulare",
    id: 6107,
    Positive_Cases: 1,
    Coordinates: [
      35.85829,
      -119.303735
    ]
  },
  {
    Year: 2013,
    Week_Reported: 40,
    County: "Tulare",
    id: 6107,
    Positive_Cases: 3,
    Coordinates: [
      35.85829,
      -119.303735
    ]
  },
  {
    Year: 2013,
    Week_Reported: 49,
    County: "Tulare",
    id: 6107,
    Positive_Cases: 1,
    Coordinates: [
      35.85829,
      -119.303735
    ]
  },
  {
    Year: 2014,
    Week_Reported: 26,
    County: "Tulare",
    id: 6107,
    Positive_Cases: 1,
    Coordinates: [
      35.85829,
      -119.303735
    ]
  },
  {
    Year: 2014,
    Week_Reported: 28,
    County: "Tulare",
    id: 6107,
    Positive_Cases: 2,
    Coordinates: [
      35.85829,
      -119.303735
    ]
  },
  {
    Year: 2014,
    Week_Reported: 31,
    County: "Tulare",
    id: 6107,
    Positive_Cases: 1,
    Coordinates: [
      35.85829,
      -119.303735
    ]
  },
  {
    Year: 2014,
    Week_Reported: 34,
    County: "Tulare",
    id: 6107,
    Positive_Cases: 1,
    Coordinates: [
      35.85829,
      -119.303735
    ]
  },
  {
    Year: 2014,
    Week_Reported: 35,
    County: "Tulare",
    id: 6107,
    Positive_Cases: 1,
    Coordinates: [
      35.85829,
      -119.303735
    ]
  },
  {
    Year: 2014,
    Week_Reported: 36,
    County: "Tulare",
    id: 6107,
    Positive_Cases: 1,
    Coordinates: [
      35.85829,
      -119.303735
    ]
  },
  {
    Year: 2014,
    Week_Reported: 37,
    County: "Tulare",
    id: 6107,
    Positive_Cases: 2,
    Coordinates: [
      35.85829,
      -119.303735
    ]
  },
  {
    Year: 2014,
    Week_Reported: 38,
    County: "Tulare",
    id: 6107,
    Positive_Cases: 1,
    Coordinates: [
      35.85829,
      -119.303735
    ]
  },
  {
    Year: 2014,
    Week_Reported: 39,
    County: "Tulare",
    id: 6107,
    Positive_Cases: 3,
    Coordinates: [
      35.85829,
      -119.303735
    ]
  },
  {
    Year: 2014,
    Week_Reported: 40,
    County: "Tulare",
    id: 6107,
    Positive_Cases: 1,
    Coordinates: [
      35.85829,
      -119.303735
    ]
  },
  {
    Year: 2014,
    Week_Reported: 41,
    County: "Tulare",
    id: 6107,
    Positive_Cases: 5,
    Coordinates: [
      35.85829,
      -119.303735
    ]
  },
  {
    Year: 2014,
    Week_Reported: 52,
    County: "Tulare",
    id: 6107,
    Positive_Cases: 2,
    Coordinates: [
      35.85829,
      -119.303735
    ]
  },
  {
    Year: 2015,
    Week_Reported: 30,
    County: "Tulare",
    id: 6107,
    Positive_Cases: 2,
    Coordinates: [
      35.85829,
      -119.303735
    ]
  },
  {
    Year: 2015,
    Week_Reported: 31,
    County: "Tulare",
    id: 6107,
    Positive_Cases: 2,
    Coordinates: [
      35.85829,
      -119.303735
    ]
  },
  {
    Year: 2015,
    Week_Reported: 39,
    County: "Tulare",
    id: 6107,
    Positive_Cases: 3,
    Coordinates: [
      35.85829,
      -119.303735
    ]
  },
  {
    Year: 2015,
    Week_Reported: 49,
    County: "Tulare",
    id: 6107,
    Positive_Cases: 4,
    Coordinates: [
      35.85829,
      -119.303735
    ]
  },
  {
    Year: 2015,
    Week_Reported: 50,
    County: "Tulare",
    id: 6107,
    Positive_Cases: 2,
    Coordinates: [
      35.85829,
      -119.303735
    ]
  },
  {
    Year: 2006,
    Week_Reported: 35,
    County: "Ventura",
    id: 6111,
    Positive_Cases: 1,
    Coordinates: [
      34.032383,
      -119.1343
    ]
  },
  {
    Year: 2006,
    Week_Reported: 36,
    County: "Ventura",
    id: 6111,
    Positive_Cases: 2,
    Coordinates: [
      34.032383,
      -119.1343
    ]
  },
  {
    Year: 2007,
    Week_Reported: 37,
    County: "Ventura",
    id: 6111,
    Positive_Cases: 1,
    Coordinates: [
      34.032383,
      -119.1343
    ]
  },
  {
    Year: 2012,
    Week_Reported: 33,
    County: "Ventura",
    id: 6111,
    Positive_Cases: 1,
    Coordinates: [
      34.032383,
      -119.1343
    ]
  },
  {
    Year: 2012,
    Week_Reported: 36,
    County: "Ventura",
    id: 6111,
    Positive_Cases: 1,
    Coordinates: [
      34.032383,
      -119.1343
    ]
  },
  {
    Year: 2012,
    Week_Reported: 41,
    County: "Ventura",
    id: 6111,
    Positive_Cases: 2,
    Coordinates: [
      34.032383,
      -119.1343
    ]
  },
  {
    Year: 2012,
    Week_Reported: 51,
    County: "Ventura",
    id: 6111,
    Positive_Cases: 3,
    Coordinates: [
      34.032383,
      -119.1343
    ]
  },
  {
    Year: 2013,
    Week_Reported: 33,
    County: "Ventura",
    id: 6111,
    Positive_Cases: 1,
    Coordinates: [
      34.032383,
      -119.1343
    ]
  },
  {
    Year: 2013,
    Week_Reported: 41,
    County: "Ventura",
    id: 6111,
    Positive_Cases: 1,
    Coordinates: [
      34.032383,
      -119.1343
    ]
  },
  {
    Year: 2014,
    Week_Reported: 44,
    County: "Ventura",
    id: 6111,
    Positive_Cases: 1,
    Coordinates: [
      34.032383,
      -119.1343
    ]
  },
  {
    Year: 2015,
    Week_Reported: 38,
    County: "Ventura",
    id: 6111,
    Positive_Cases: 1,
    Coordinates: [
      34.032383,
      -119.1343
    ]
  },
  {
    Year: 2015,
    Week_Reported: 40,
    County: "Ventura",
    id: 6111,
    Positive_Cases: 1,
    Coordinates: [
      34.032383,
      -119.1343
    ]
  },
  {
    Year: 2015,
    Week_Reported: 41,
    County: "Ventura",
    id: 6111,
    Positive_Cases: 1,
    Coordinates: [
      34.032383,
      -119.1343
    ]
  },
  {
    Year: 2015,
    Week_Reported: 42,
    County: "Ventura",
    id: 6111,
    Positive_Cases: 2,
    Coordinates: [
      34.032383,
      -119.1343
    ]
  },
  {
    Year: 2015,
    Week_Reported: 45,
    County: "Ventura",
    id: 6111,
    Positive_Cases: 1,
    Coordinates: [
      34.032383,
      -119.1343
    ]
  },
  {
    Year: 2006,
    Week_Reported: 30,
    County: "Yolo",
    id: 6113,
    Positive_Cases: 2,
    Coordinates: [
      38.591854,
      -121.537801
    ]
  },
  {
    Year: 2006,
    Week_Reported: 31,
    County: "Yolo",
    id: 6113,
    Positive_Cases: 1,
    Coordinates: [
      38.591854,
      -121.537801
    ]
  },
  {
    Year: 2006,
    Week_Reported: 32,
    County: "Yolo",
    id: 6113,
    Positive_Cases: 5,
    Coordinates: [
      38.591854,
      -121.537801
    ]
  },
  {
    Year: 2006,
    Week_Reported: 33,
    County: "Yolo",
    id: 6113,
    Positive_Cases: 7,
    Coordinates: [
      38.591854,
      -121.537801
    ]
  },
  {
    Year: 2006,
    Week_Reported: 34,
    County: "Yolo",
    id: 6113,
    Positive_Cases: 4,
    Coordinates: [
      38.591854,
      -121.537801
    ]
  },
  {
    Year: 2006,
    Week_Reported: 35,
    County: "Yolo",
    id: 6113,
    Positive_Cases: 2,
    Coordinates: [
      38.591854,
      -121.537801
    ]
  },
  {
    Year: 2006,
    Week_Reported: 36,
    County: "Yolo",
    id: 6113,
    Positive_Cases: 1,
    Coordinates: [
      38.591854,
      -121.537801
    ]
  },
  {
    Year: 2006,
    Week_Reported: 37,
    County: "Yolo",
    id: 6113,
    Positive_Cases: 3,
    Coordinates: [
      38.591854,
      -121.537801
    ]
  },
  {
    Year: 2006,
    Week_Reported: 41,
    County: "Yolo",
    id: 6113,
    Positive_Cases: 1,
    Coordinates: [
      38.591854,
      -121.537801
    ]
  },
  {
    Year: 2007,
    Week_Reported: 32,
    County: "Yolo",
    id: 6113,
    Positive_Cases: 1,
    Coordinates: [
      38.591854,
      -121.537801
    ]
  },
  {
    Year: 2007,
    Week_Reported: 49,
    County: "Yolo",
    id: 6113,
    Positive_Cases: 1,
    Coordinates: [
      38.591854,
      -121.537801
    ]
  },
  {
    Year: 2008,
    Week_Reported: 37,
    County: "Yolo",
    id: 6113,
    Positive_Cases: 1,
    Coordinates: [
      38.591854,
      -121.537801
    ]
  },
  {
    Year: 2009,
    Week_Reported: 38,
    County: "Yolo",
    id: 6113,
    Positive_Cases: 2,
    Coordinates: [
      38.591854,
      -121.537801
    ]
  },
  {
    Year: 2012,
    Week_Reported: 36,
    County: "Yolo",
    id: 6113,
    Positive_Cases: 3,
    Coordinates: [
      38.591854,
      -121.537801
    ]
  },
  {
    Year: 2012,
    Week_Reported: 38,
    County: "Yolo",
    id: 6113,
    Positive_Cases: 1,
    Coordinates: [
      38.591854,
      -121.537801
    ]
  },
  {
    Year: 2012,
    Week_Reported: 40,
    County: "Yolo",
    id: 6113,
    Positive_Cases: 1,
    Coordinates: [
      38.591854,
      -121.537801
    ]
  },
  {
    Year: 2012,
    Week_Reported: 46,
    County: "Yolo",
    id: 6113,
    Positive_Cases: 1,
    Coordinates: [
      38.591854,
      -121.537801
    ]
  },
  {
    Year: 2012,
    Week_Reported: 52,
    County: "Yolo",
    id: 6113,
    Positive_Cases: 4,
    Coordinates: [
      38.591854,
      -121.537801
    ]
  },
  {
    Year: 2013,
    Week_Reported: 31,
    County: "Yolo",
    id: 6113,
    Positive_Cases: 1,
    Coordinates: [
      38.591854,
      -121.537801
    ]
  },
  {
    Year: 2013,
    Week_Reported: 34,
    County: "Yolo",
    id: 6113,
    Positive_Cases: 1,
    Coordinates: [
      38.591854,
      -121.537801
    ]
  },
  {
    Year: 2013,
    Week_Reported: 35,
    County: "Yolo",
    id: 6113,
    Positive_Cases: 1,
    Coordinates: [
      38.591854,
      -121.537801
    ]
  },
  {
    Year: 2013,
    Week_Reported: 36,
    County: "Yolo",
    id: 6113,
    Positive_Cases: 1,
    Coordinates: [
      38.591854,
      -121.537801
    ]
  },
  {
    Year: 2013,
    Week_Reported: 41,
    County: "Yolo",
    id: 6113,
    Positive_Cases: 1,
    Coordinates: [
      38.591854,
      -121.537801
    ]
  },
  {
    Year: 2013,
    Week_Reported: 42,
    County: "Yolo",
    id: 6113,
    Positive_Cases: 1,
    Coordinates: [
      38.591854,
      -121.537801
    ]
  },
  {
    Year: 2014,
    Week_Reported: 37,
    County: "Yolo",
    id: 6113,
    Positive_Cases: 1,
    Coordinates: [
      38.591854,
      -121.537801
    ]
  },
  {
    Year: 2014,
    Week_Reported: 38,
    County: "Yolo",
    id: 6113,
    Positive_Cases: 3,
    Coordinates: [
      38.591854,
      -121.537801
    ]
  },
  {
    Year: 2014,
    Week_Reported: 39,
    County: "Yolo",
    id: 6113,
    Positive_Cases: 1,
    Coordinates: [
      38.591854,
      -121.537801
    ]
  },
  {
    Year: 2014,
    Week_Reported: 40,
    County: "Yolo",
    id: 6113,
    Positive_Cases: 5,
    Coordinates: [
      38.591854,
      -121.537801
    ]
  },
  {
    Year: 2014,
    Week_Reported: 42,
    County: "Yolo",
    id: 6113,
    Positive_Cases: 1,
    Coordinates: [
      38.591854,
      -121.537801
    ]
  },
  {
    Year: 2014,
    Week_Reported: 52,
    County: "Yolo",
    id: 6113,
    Positive_Cases: 4,
    Coordinates: [
      38.591854,
      -121.537801
    ]
  },
  {
    Year: 2015,
    Week_Reported: 34,
    County: "Yolo",
    id: 6113,
    Positive_Cases: 1,
    Coordinates: [
      38.591854,
      -121.537801
    ]
  },
  {
    Year: 2015,
    Week_Reported: 35,
    County: "Yolo",
    id: 6113,
    Positive_Cases: 2,
    Coordinates: [
      38.591854,
      -121.537801
    ]
  },
  {
    Year: 2015,
    Week_Reported: 36,
    County: "Yolo",
    id: 6113,
    Positive_Cases: 1,
    Coordinates: [
      38.591854,
      -121.537801
    ]
  },
  {
    Year: 2015,
    Week_Reported: 38,
    County: "Yolo",
    id: 6113,
    Positive_Cases: 2,
    Coordinates: [
      38.591854,
      -121.537801
    ]
  },
  {
    Year: 2015,
    Week_Reported: 40,
    County: "Yolo",
    id: 6113,
    Positive_Cases: 1,
    Coordinates: [
      38.591854,
      -121.537801
    ]
  },
  {
    Year: 2015,
    Week_Reported: 48,
    County: "Yolo",
    id: 6113,
    Positive_Cases: 1,
    Coordinates: [
      38.591854,
      -121.537801
    ]
  },
  {
    Year: 2006,
    Week_Reported: 37,
    County: "Yuba",
    id: 6115,
    Positive_Cases: 3,
    Coordinates: [
      39.08337,
      -121.397892
    ]
  },
  {
    Year: 2006,
    Week_Reported: 44,
    County: "Yuba",
    id: 6115,
    Positive_Cases: 2,
    Coordinates: [
      39.08337,
      -121.397892
    ]
  },
  {
    Year: 2009,
    Week_Reported: 43,
    County: "Yuba",
    id: 6115,
    Positive_Cases: 1,
    Coordinates: [
      39.08337,
      -121.397892
    ]
  },
  {
    Year: 2011,
    Week_Reported: 38,
    County: "Yuba",
    id: 6115,
    Positive_Cases: 1,
    Coordinates: [
      39.08337,
      -121.397892
    ]
  },
  {
    Year: 2011,
    Week_Reported: 52,
    County: "Yuba",
    id: 6115,
    Positive_Cases: 2,
    Coordinates: [
      39.08337,
      -121.397892
    ]
  },
  {
    Year: 2012,
    Week_Reported: 38,
    County: "Yuba",
    id: 6115,
    Positive_Cases: 2,
    Coordinates: [
      39.08337,
      -121.397892
    ]
  },
  {
    Year: 2012,
    Week_Reported: 43,
    County: "Yuba",
    id: 6115,
    Positive_Cases: 1,
    Coordinates: [
      39.08337,
      -121.397892
    ]
  },
  {
    Year: 2012,
    Week_Reported: 44,
    County: "Yuba",
    id: 6115,
    Positive_Cases: 1,
    Coordinates: [
      39.08337,
      -121.397892
    ]
  },
  {
    Year: 2013,
    Week_Reported: 39,
    County: "Yuba",
    id: 6115,
    Positive_Cases: 4,
    Coordinates: [
      39.08337,
      -121.397892
    ]
  },
  {
    Year: 2013,
    Week_Reported: 42,
    County: "Yuba",
    id: 6115,
    Positive_Cases: 2,
    Coordinates: [
      39.08337,
      -121.397892
    ]
  },
  {
    Year: 2013,
    Week_Reported: 44,
    County: "Yuba",
    id: 6115,
    Positive_Cases: 1,
    Coordinates: [
      39.08337,
      -121.397892
    ]
  },
  {
    Year: 2013,
    Week_Reported: 46,
    County: "Yuba",
    id: 6115,
    Positive_Cases: 1,
    Coordinates: [
      39.08337,
      -121.397892
    ]
  },
  {
    Year: 2013,
    Week_Reported: 51,
    County: "Yuba",
    id: 6115,
    Positive_Cases: 1,
    Coordinates: [
      39.08337,
      -121.397892
    ]
  },
  {
    Year: 2014,
    Week_Reported: 33,
    County: "Yuba",
    id: 6115,
    Positive_Cases: 1,
    Coordinates: [
      39.08337,
      -121.397892
    ]
  },
  {
    Year: 2014,
    Week_Reported: 34,
    County: "Yuba",
    id: 6115,
    Positive_Cases: 1,
    Coordinates: [
      39.08337,
      -121.397892
    ]
  },
  {
    Year: 2014,
    Week_Reported: 36,
    County: "Yuba",
    id: 6115,
    Positive_Cases: 1,
    Coordinates: [
      39.08337,
      -121.397892
    ]
  },
  {
    Year: 2014,
    Week_Reported: 38,
    County: "Yuba",
    id: 6115,
    Positive_Cases: 1,
    Coordinates: [
      39.08337,
      -121.397892
    ]
  },
  {
    Year: 2014,
    Week_Reported: 51,
    County: "Yuba",
    id: 6115,
    Positive_Cases: 1,
    Coordinates: [
      39.08337,
      -121.397892
    ]
  },
  {
    Year: 2014,
    Week_Reported: 52,
    County: "Yuba",
    id: 6115,
    Positive_Cases: 1,
    Coordinates: [
      39.08337,
      -121.397892
    ]
  },
  {
    Year: 2015,
    Week_Reported: 34,
    County: "Yuba",
    id: 6115,
    Positive_Cases: 4,
    Coordinates: [
      39.08337,
      -121.397892
    ]
  },
  {
    Year: 2015,
    Week_Reported: 36,
    County: "Yuba",
    id: 6115,
    Positive_Cases: 3,
    Coordinates: [
      39.08337,
      -121.397892
    ]
  },
  {
    Year: 2015,
    Week_Reported: 44,
    County: "Yuba",
    id: 6115,
    Positive_Cases: 1,
    Coordinates: [
      39.08337,
      -121.397892
    ]
  },
  {
    Year: 2007,
    Week_Reported: 39,
    County: "Madera",
    id: 6039,
    Positive_Cases: 1,
    Coordinates: [
      37.379045,
      -119.736326
    ]
  },
  {
    Year: 2007,
    Week_Reported: 41,
    County: "Madera",
    id: 6039,
    Positive_Cases: 1,
    Coordinates: [
      37.379045,
      -119.736326
    ]
  },
  {
    Year: 2009,
    Week_Reported: 46,
    County: "Madera",
    id: 6039,
    Positive_Cases: 1,
    Coordinates: [
      37.379045,
      -119.736326
    ]
  },
  {
    Year: 2010,
    Week_Reported: 31,
    County: "Madera",
    id: 6039,
    Positive_Cases: 2,
    Coordinates: [
      37.379045,
      -119.736326
    ]
  },
  {
    Year: 2010,
    Week_Reported: 33,
    County: "Madera",
    id: 6039,
    Positive_Cases: 1,
    Coordinates: [
      37.379045,
      -119.736326
    ]
  },
  {
    Year: 2010,
    Week_Reported: 38,
    County: "Madera",
    id: 6039,
    Positive_Cases: 2,
    Coordinates: [
      37.379045,
      -119.736326
    ]
  },
  {
    Year: 2010,
    Week_Reported: 53,
    County: "Madera",
    id: 6039,
    Positive_Cases: 2,
    Coordinates: [
      37.379045,
      -119.736326
    ]
  },
  {
    Year: 2011,
    Week_Reported: 32,
    County: "Madera",
    id: 6039,
    Positive_Cases: 1,
    Coordinates: [
      37.379045,
      -119.736326
    ]
  },
  {
    Year: 2011,
    Week_Reported: 45,
    County: "Madera",
    id: 6039,
    Positive_Cases: 1,
    Coordinates: [
      37.379045,
      -119.736326
    ]
  },
  {
    Year: 2012,
    Week_Reported: 37,
    County: "Madera",
    id: 6039,
    Positive_Cases: 1,
    Coordinates: [
      37.379045,
      -119.736326
    ]
  },
  {
    Year: 2012,
    Week_Reported: 53,
    County: "Madera",
    id: 6039,
    Positive_Cases: 2,
    Coordinates: [
      37.379045,
      -119.736326
    ]
  },
  {
    Year: 2013,
    Week_Reported: 40,
    County: "Madera",
    id: 6039,
    Positive_Cases: 2,
    Coordinates: [
      37.379045,
      -119.736326
    ]
  },
  {
    Year: 2013,
    Week_Reported: 42,
    County: "Madera",
    id: 6039,
    Positive_Cases: 1,
    Coordinates: [
      37.379045,
      -119.736326
    ]
  },
  {
    Year: 2014,
    Week_Reported: 31,
    County: "Madera",
    id: 6039,
    Positive_Cases: 1,
    Coordinates: [
      37.379045,
      -119.736326
    ]
  },
  {
    Year: 2014,
    Week_Reported: 32,
    County: "Madera",
    id: 6039,
    Positive_Cases: 1,
    Coordinates: [
      37.379045,
      -119.736326
    ]
  },
  {
    Year: 2014,
    Week_Reported: 38,
    County: "Madera",
    id: 6039,
    Positive_Cases: 1,
    Coordinates: [
      37.379045,
      -119.736326
    ]
  },
  {
    Year: 2015,
    Week_Reported: 36,
    County: "Madera",
    id: 6039,
    Positive_Cases: 1,
    Coordinates: [
      37.379045,
      -119.736326
    ]
  },
  {
    Year: 2015,
    Week_Reported: 38,
    County: "Madera",
    id: 6039,
    Positive_Cases: 1,
    Coordinates: [
      37.379045,
      -119.736326
    ]
  },
  {
    Year: 2015,
    Week_Reported: 40,
    County: "Madera",
    id: 6039,
    Positive_Cases: 1,
    Coordinates: [
      37.379045,
      -119.736326
    ]
  },
  {
    Year: 2015,
    Week_Reported: 42,
    County: "Madera",
    id: 6039,
    Positive_Cases: 1,
    Coordinates: [
      37.379045,
      -119.736326
    ]
  },
  {
    Year: 2007,
    Week_Reported: 29,
    County: "Mendocino",
    id: 6045,
    Positive_Cases: 1,
    Coordinates: [
      39.168027,
      -123.393401
    ]
  },
  {
    Year: 2007,
    Week_Reported: 38,
    County: "Mendocino",
    id: 6045,
    Positive_Cases: 1,
    Coordinates: [
      39.168027,
      -123.393401
    ]
  },
  {
    Year: 2014,
    Week_Reported: 37,
    County: "Mendocino",
    id: 6045,
    Positive_Cases: 1,
    Coordinates: [
      39.168027,
      -123.393401
    ]
  },
  {
    Year: 2015,
    Week_Reported: 33,
    County: "Mendocino",
    id: 6045,
    Positive_Cases: 1,
    Coordinates: [
      39.168027,
      -123.393401
    ]
  },
  {
    Year: 2007,
    Week_Reported: 30,
    County: "Sonoma",
    id: 6097,
    Positive_Cases: 1,
    Coordinates: [
      38.351416,
      -122.974134
    ]
  },
  {
    Year: 2008,
    Week_Reported: 39,
    County: "Calaveras",
    id: 6009,
    Positive_Cases: 1,
    Coordinates: [
      38.092294,
      -120.535316
    ]
  },
  {
    Year: 2008,
    Week_Reported: 53,
    County: "Santa Barbara",
    id: 6083,
    Positive_Cases: 1,
    Coordinates: [
      34.405045,
      -119.520525
    ]
  },
  {
    Year: 2011,
    Week_Reported: 29,
    County: "Santa Barbara",
    id: 6083,
    Positive_Cases: 1,
    Coordinates: [
      34.405045,
      -119.520525
    ]
  },
  {
    Year: 2013,
    Week_Reported: 46,
    County: "Santa Barbara",
    id: 6083,
    Positive_Cases: 1,
    Coordinates: [
      34.405045,
      -119.520525
    ]
  },
  {
    Year: 2009,
    Week_Reported: 49,
    County: "Monterey",
    id: 6053,
    Positive_Cases: 1,
    Coordinates: [
      35.907585,
      -120.937371
    ]
  },
  {
    Year: 2012,
    Week_Reported: 40,
    County: "Monterey",
    id: 6053,
    Positive_Cases: 1,
    Coordinates: [
      35.907585,
      -120.937371
    ]
  },
  {
    Year: 2010,
    Week_Reported: 53,
    County: "San Francisco",
    id: 6075,
    Positive_Cases: 1,
    Coordinates: [
      37.784827,
      -122.727802
    ]
  },
  {
    Year: 2012,
    Week_Reported: 39,
    County: "San Francisco",
    id: 6075,
    Positive_Cases: 1,
    Coordinates: [
      37.784827,
      -122.727802
    ]
  },
  {
    Year: 2013,
    Week_Reported: 35,
    County: "San Francisco",
    id: 6075,
    Positive_Cases: 1,
    Coordinates: [
      37.784827,
      -122.727802
    ]
  },
  {
    Year: 2011,
    Week_Reported: 41,
    County: "Amador",
    id: 6005,
    Positive_Cases: 1,
    Coordinates: [
      38.418568,
      -120.831845
    ]
  },
  {
    Year: 2011,
    Week_Reported: 50,
    County: "Santa Cruz",
    id: 6087,
    Positive_Cases: 1,
    Coordinates: [
      31.609653,
      -110.563551
    ]
  },
  {
    Year: 2013,
    Week_Reported: 44,
    County: "Siskiyou",
    id: 6093,
    Positive_Cases: 1,
    Coordinates: [
      41.451129,
      -123.467024
    ]
  },
  {
    Year: 2015,
    Week_Reported: 34,
    County: "Siskiyou",
    id: 6093,
    Positive_Cases: 1,
    Coordinates: [
      41.451129,
      -123.467024
    ]
  }
]
;

var posCaseNumMarkers = [];

for (var i = 0; i < locations.length; i++) {
  posCaseNumMarkers.push(
    L.circleMarker(locations[i].Coordinates, {
      // stroke: false,
      fillOpacity: 0.75,
      color: "black",
      fillColor: "#FF4B33",
      radius: posCaseMarkerSize(locations[i].Positive_Cases)
    }).bindPopup("<h2>" + locations[i].County + "</h2> <hr> <h3>Number of Positive Cases: " + locations[i].Positive_Cases + "</h3>" + "<hr> <h3>Year: " + locations[i].Year + "</h3>" + "<h3>Week Reported: " + locations[i].Week_Reported + "</h3>"));
}

// Define variables for our base layer
var lightmap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  maxZoom: 8,
  minZoom: 4,
  id: "mapbox.light",
  accessToken: API_KEY
});

var posCase_numbers = L.layerGroup(posCaseNumMarkers);

var myMap;

myMap = L.map("map", {
  center: [36.778259, -119.417931],
  zoom: 5.5, 
  layers: [lightmap, posCase_numbers]
});

