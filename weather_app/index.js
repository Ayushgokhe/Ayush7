const apiKey = 'd233d995d0b1785fe4e921cf8a9ec56e';
        const apiurl = 'https://api.openweathermap.org/data/2.5/weather?units=metric';

        const searchBox = document.querySelector(".two")

        async function checkWeather(city) {
            console.log(city)
            const response = await fetch(apiurl + `&q=${city}` + `&appid=${apiKey}`);
            var data = await response.json();

            console.log(data)
            document.querySelector(".two").innerHTML = data.name;
            document.querySelector(".four").innerHTML = data.main.temp + '°C';
            document.querySelector(".list1").innerHTML = data.main.temp + '°c';
            document.querySelector(".list2").innerHTML = ((data.main.temp) - 2).toFixed(1) + '°c';
            document.querySelector(".list3").innerHTML = ((data.main.temp) - 4).toFixed(1) + '°c';
            document.querySelector(".list4").innerHTML = ((data.main.temp) - 6).toFixed(1) + '°c';
            document.querySelector(".li1").innerHTML = data.main.temp_min + '°c';
            document.querySelector(".li2").innerHTML = data.main.temp_max + '°c';
            document.querySelector(".para1").innerHTML = data.weather[0].main;
            document.querySelector(".wind1").innerHTML = data.wind.speed;
            document.querySelector(".wind2").innerHTML = ((data.wind.speed) - 2).toFixed(1);
            document.querySelector(".wind3").innerHTML = ((data.wind.speed) + 3).toFixed(1);
            document.querySelector(".wind4").innerHTML = ((data.wind.speed) + 4).toFixed(1);
            document.querySelector(".per1").innerHTML = (data.main.feels_like.toFixed(1)) + '%';
            document.querySelector(".per2").innerHTML = ((data.main.feels_like) + 20).toFixed(1) + '%';
            document.querySelector(".per3").innerHTML = ((data.main.feels_like) + 40).toFixed(1) + '%';
            document.querySelector(".per4").innerHTML = ((data.main.feels_like) + 30).toFixed(1) + '%';
            document.querySelector(".min1").innerHTML = (data.main.temp).toFixed(1) + '°c';
            document.querySelector(".max1").innerHTML = (data.main.temp.toFixed(1)) + '°c';
            document.querySelector(".min2").innerHTML = ((data.main.temp_min) - 3).toFixed(1) + '°c';
            document.querySelector(".max2").innerHTML = ((data.main.temp_max) + 4).toFixed(1) + '°c'
            document.querySelector(".min3").innerHTML = ((data.main.temp_min) - 4).toFixed(1) + '°c';
            document.querySelector(".max3").innerHTML = ((data.main.temp_max) + 3).toFixed(1) + '°c'
            document.querySelector(".min4").innerHTML = ((data.main.temp_min) - 3).toFixed(1) + '°c';
            document.querySelector(".max4").innerHTML = ((data.main.temp_max) + 6).toFixed(1) + '°c'
            document.querySelector(".min5").innerHTML = ((data.main.temp_min) - 1).toFixed(1) + '°c';
            document.querySelector(".max5").innerHTML = ((data.main.temp_max) + 8).toFixed(1) + '°c'
            document.querySelector(".min6").innerHTML = ((data.main.temp_min) - 5).toFixed(1) + '°c';
            document.querySelector(".max6").innerHTML = ((data.main.temp_max) + 2).toFixed(1) + '°c'
            document.querySelector(".min7").innerHTML = ((data.main.temp_min) - 7).toFixed(1) + '°c';
            document.querySelector(".max7").innerHTML = ((data.main.temp_max) + 6).toFixed(1) + '°c'
            document.querySelector(".min8").innerHTML = ((data.main.temp_min) - 2).toFixed(1) + '°c';
            document.querySelector(".max8").innerHTML = ((data.main.temp_max) + 3).toFixed(1) + '°c'

            document.querySelector('.padding1').style.padding = ' 0px 30px 0px 0px' 
            document.querySelector('.padding2').style.padding = ' 0px 30px 0px 0px' 
            document.querySelector('.padding3').style.padding = ' 0px 30px 0px 0px' 
            document.querySelector('.padding4').style.padding = ' 0px 30px 0px 0px' 

            if (data.weather[0].main == 'Clouds') {
                document.querySelector(".img1").src = 'https://toppng.com/uploads/preview/cloudy-weather-symbol-11549788090jibo9yqupt.png'
                document.querySelector(".img2").src = 'https://toppng.com/uploads/preview/cloudy-weather-symbol-11549788090jibo9yqupt.png'
                document.querySelector(".img3").src = 'https://toppng.com/uploads/preview/cloudy-weather-symbol-11549788090jibo9yqupt.png'
                document.querySelector(".img4").src = 'https://toppng.com/uploads/preview/cloudy-weather-symbol-11549788090jibo9yqupt.png'
            } else if (data.weather[0].main == 'Clear') {
                document.querySelector(".img1").src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRup4wdCVtBPSZ13sO1Nv_yM0deJ6D6ar1pqDE8ZGBDaZ5daS6LTwcHABBlo3pdWjdfvOQ&usqp=CAU'
                document.querySelector(".img2").src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRup4wdCVtBPSZ13sO1Nv_yM0deJ6D6ar1pqDE8ZGBDaZ5daS6LTwcHABBlo3pdWjdfvOQ&usqp=CAU'
                document.querySelector(".img3").src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRup4wdCVtBPSZ13sO1Nv_yM0deJ6D6ar1pqDE8ZGBDaZ5daS6LTwcHABBlo3pdWjdfvOQ&usqp=CAU'
                document.querySelector(".img4").src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRup4wdCVtBPSZ13sO1Nv_yM0deJ6D6ar1pqDE8ZGBDaZ5daS6LTwcHABBlo3pdWjdfvOQ&usqp=CAU'
            } else if (data.weather[0].main == 'Rain') {
                document.querySelector(".img1").src = 'https://www.vhv.rs/dpng/d/405-4052955_weather-icon-rain-png-transparent-png.png'
                document.querySelector(".img2").src = 'https://www.vhv.rs/dpng/d/405-4052955_weather-icon-rain-png-transparent-png.png'
                document.querySelector(".img3").src = 'https://www.vhv.rs/dpng/d/405-4052955_weather-icon-rain-png-transparent-png.png'
                document.querySelector(".img4").src = 'https://www.vhv.rs/dpng/d/405-4052955_weather-icon-rain-png-transparent-png.png'
            }
        }
        var change = () => {
            checkWeather(searchBox.value)
        }