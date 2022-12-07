let weather = {
  apiKey: "b20e2ea3600172ecd21fbab1e61a29e2",
  fetchWeather: function (place) {
    fetch(
      "https://api.openweathermap.org/data/2.5/forecast/daily?q=" +
        place +
        "&cnt=7&units=metric&appid=" +
        this.apiKey
    )
      .then((response) => {
        if (!response.ok) {
          alert("No weather found.");
          throw new Error("No weather found.");
        }
        return response.json();
      })
      .then((data) => this.displayWeather(data));
  },

  displayWeather: function (data) {
    const { name } = data.city;
    const { icon, description } = data.list[0].weather[0];
    const { humidity } = data.list[0];
    const { max } = data.list[0].temp;
    const { speed } = data.list[0];

    document.querySelector(".city").innerText = name;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = max + "°C";
    document.querySelector(".feel").innerText =
      data.list[0].feels_like.day + "°";
    document.querySelector(".wind").innerText = speed + " km/h";
    document.querySelector(".clouds").innerText =
      data.list[0].pressure + " atm";
    document.querySelector(".humidity").innerText = humidity + "%";

    document.querySelector(".tmp1").innerHTML = data.list[1].temp.max + "°C";
    document.querySelector(".tmp2").innerHTML = data.list[2].temp.max + "°C";
    document.querySelector(".tmp3").innerHTML = data.list[3].temp.max + "°C";
    document.querySelector(".tmp4").innerHTML = data.list[4].temp.max + "°C";
    document.querySelector(".tmp5").innerHTML = data.list[5].temp.max + "°C";
    document.querySelector(".tmp6").innerHTML = data.list[6].temp.max + "°C";
    document.querySelector(".logo1").src =
      "https://openweathermap.org/img/wn/" +
      data.list[1].weather[0].icon +
      ".png";
    document.querySelector(".logo2").src =
      "https://openweathermap.org/img/wn/" +
      data.list[2].weather[0].icon +
      ".png";
    document.querySelector(".logo3").src =
      "https://openweathermap.org/img/wn/" +
      data.list[3].weather[0].icon +
      ".png";
    document.querySelector(".logo4").src =
      "https://openweathermap.org/img/wn/" +
      data.list[4].weather[0].icon +
      ".png";
    document.querySelector(".logo5").src =
      "https://openweathermap.org/img/wn/" +
      data.list[5].weather[0].icon +
      ".png";
    document.querySelector(".logo6").src =
      "https://openweathermap.org/img/wn/" +
      data.list[6].weather[0].icon +
      ".png";
    document.querySelector(".humi1").innerText =
      "Humidity: " + data.list[1].humidity + "%";
    document.querySelector(".win1").innerText =
      "Wind speed: " + data.list[1].speed + " km/h";
    document.querySelector(".humi2").innerText =
      "Humidity: " + data.list[2].humidity + "%";
    document.querySelector(".win2").innerText =
      "Wind speed: " + data.list[2].speed + " km/h";
    document.querySelector(".humi3").innerText =
      "Humidity: " + data.list[3].humidity + "%";
    document.querySelector(".win3").innerText =
      "Wind speed: " + data.list[3].speed + " km/h";
    document.querySelector(".humi4").innerText =
      "Humidity: " + data.list[4].humidity + "%";
    document.querySelector(".win4").innerText =
      "Wind speed: " + data.list[4].speed + " km/h";
    document.querySelector(".humi5").innerText =
      "Humidity: " + data.list[5].humidity + "%";
    document.querySelector(".win5").innerText =
      "Wind speed: " + data.list[5].speed + " km/h";
    document.querySelector(".humi6").innerText =
      "Humidity: " + data.list[6].humidity + "%";
    document.querySelector(".win6").innerText =
      "Wind speed: " + data.list[6].speed + " km/h";

    const ctx = document.getElementById("myChart");

    new Chart(ctx, {
      type: "line",
      data: {
        labels: [],
        datasets: [
          {
            label: "Temp in °C",
            data: data.list[0].feels_like,
            borderWidth: 2,
            borderColor: "red",
            backgroundColor: "transparent",
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  },

  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });

weather.fetchWeather("delhi");

const getCurrentTimeDate = () => {
  let currentTimeDate = new Date();

  var weekday = new Array(7);
  weekday[0] = "Sun";
  weekday[1] = "Mon";
  weekday[2] = "Tue";
  weekday[3] = "Wed";
  weekday[4] = "Thu";
  weekday[5] = "Fri";
  weekday[6] = "Sat";

  var month = new Array();
  month[0] = "Jan";
  month[1] = "Feb";
  month[2] = "Mar";
  month[3] = "Apr";
  month[4] = "May";
  month[5] = "Jun";
  month[6] = "Jul";
  month[7] = "Aug";
  month[8] = "SEP";
  month[9] = "Oct";
  month[10] = "Nov";
  month[11] = "Dec";

  var hours = currentTimeDate.getHours();

  var minutes = currentTimeDate.getMinutes();
  minutes = minutes < 10 ? "0" + minutes : minutes;

  var AMPM = hours >= 12 ? "PM" : "AM";

  if (hours == 12) {
    hours = 12;
  } else {
    hours = hours % 12;
  }

  var currentTime = `${hours}:${minutes}${AMPM}`;
  var currentDay = weekday[currentTimeDate.getDay()];
  var currentDate = currentTimeDate.getDate();
  var currentMonth = month[currentTimeDate.getMonth()];

  var fullDate = `${currentDate} ${currentMonth}`;

  document.getElementById("time").innerHTML = currentTime;
  document.getElementById("day").innerHTML = currentDay;
  document.getElementById("date").innerHTML = fullDate;
  document.getElementById("mon").innerHTML =
    weekday[(currentTimeDate.getDay() + 1) % 7];
  document.getElementById("tue").innerHTML =
    weekday[(currentTimeDate.getDay() + 2) % 7];
  document.getElementById("wed").innerHTML =
    weekday[(currentTimeDate.getDay() + 3) % 7];
  document.getElementById("thur").innerHTML =
    weekday[(currentTimeDate.getDay() + 4) % 7];
  document.getElementById("fri").innerHTML =
    weekday[(currentTimeDate.getDay() + 5) % 7];
  document.getElementById("sat").innerHTML =
    weekday[(currentTimeDate.getDay() + 6) % 7];

  setTimeout(getCurrentTimeDate, 500);
};
getCurrentTimeDate();

