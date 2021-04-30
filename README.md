# smart-home-api-frida-waldt

Inlämningsuppgift 1 Backend i NodeJS - Smart Home API

Hur man använder de olika apparaterna.

Dammsugaren:
Skriv följande i URL:en

    För att starta dammsugaren
        localhost:3000/vacuum/status/on

    För att stänga av dammsugaren
        localhost:3000/vacuum/status/off

AC:
Skriv följande i URL:en

    För att starta AC
        localhost:3000/ac/status/on

    För att stänga av AC
        localhost:3000/ac/status/off

    För att ändra temperaturen
        localhost:3000/ac/temp/(nummer)
    (nummer) är i det här fallet de graderna du vill ha

Gardinen:
Skriv följande i URL:en

    För att ta ner gardinen
        localhost:3000/blinds/status/down

    För att ta upp gardinen
        localhost:3000/blinds/status/up

Kameran:
Skriv följande i URL:en

    För att starta kameran
        localhost:3000/cam/status/on

    För att stänga av kameran
        localhost:3000/cam/status/off

Högtalaren:
Skriv följande i URL:en

    För att starta högtalaren
        localhost:3000/speaker/status/on

    För att stänga av högtalaren
        localhost:3000/speaker/status/off

Lamporna:
Skriv följande i URL:en

    Lampa 1
        För att starta lampa 1
            localhost:3000/lights/1/status/on

        För att stänga av lampa 1
            localhost:3000/lights/1/status/off

        För att ändra ljusstyrka på lampa 1
            localhost:3000/lights/1/brightness/(nummer)
        (nummer) i det här fallet är siffran på ljusstyrkan du väljer själv mellan 0-1.

    Lampa 2
        För att starta lampa 2
            localhost:3000/lights/2/status/on

        För att stänga av lampa 2
            localhost:3000/lights/2/status/off

        För att ändra ljusstyrka på lampa 2
            localhost:3000/lights/2/brightness/(nummer)
        (nummer) i det här fallet är siffran på ljusstyrkan du väljer själv mellan 0-1.

    Lampa 3
        För att starta lampa 3
            localhost:3000/lights/3/status/on

        För att stänga av lampa 3
            localhost:3000/lights/3/status/off

        För att ändra ljusstyrka på lampa 3
            localhost:3000/lights/3/brightness/(nummer)
        (nummer) i det här fallet är siffran på ljusstyrkan du väljer själv mellan 0-1.

Dörren:
Skriv följande i URL:en

    För att öppna dörren
        localhost:3000/lock/status/open

    För att stänga av kameran
        localhost:3000/lock/status/locked
