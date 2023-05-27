create database ejemplo;
use ejemplo;

create table Juegos
( idJuego SMALLINT,
   nombre          varchar(30),
   clasificacion   varchar(30),
   genero          varchar(30),
   precio          decimal(9,2),
   PRIMARY KEY (idJuego)
   );

   select * from Juegos;

   insert into Juegos (idJuego,nombre, clasificacion, genero, precio)
   values (1,'COD BO2','C','shooter','25');

   insert into Juegos (idJuego,nombre, clasificacion, genero, precio)
   values (2'ARK','B15','Supervivencia','15');

   insert into Juegos (idJuego,nombre, clasificacion, genero, precio)
   values (3'Minecreaft','A','Supervivencia','25');

   insert into Juegos (idJuego,nombre, clasificacion, genero, precio)
   values (4'HALO','B15','shooter','50');


