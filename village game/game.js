            var villagers = 0;
            var maxvillagers = 0;
            var wood = 100000000;
            var stone = 100000000;
            var food = 100000000;

//whouse
            var whous = 0;
            var wmaxstone = 10;
            var wmaxwood = 100;

//shouse
            var shouse = 0;
            var smaxstone = 1000;
            var smaxwood = 100;

//castle
            var castlelvl = 0;
            var maxstonewood = 10000;
            var maxfood = 1000;
            var maxwh = 5;
            var maxsh = 1;

            //var player = prompt("Whats your name?");
            var HP = 100;
            var strengh = 1;
            var stamina = 100;
            /*alert("Welcome "+player+"!") //zrobic przycisk do zmiany imienia
            var odp = confirm("Would you like to start?");
            console.log(odp)
            if (odp == 1)
            {
                console.log("Welcome "+player+". I see you're looking at the console rn. Hope you're having an amazing day ;3")
            }
            else
            {
                console.log("If you don't want to play then why start the game???")
                alert("I see you clicked wrong :)")
                location.reload();
            }*/


//resources
            function minetree()
            {
                var morewood = document.getElementById("wood");
                var rest = document.getElementById("stamina");
                wood += (Math.round(strengh) + villagers);
                stamina -= 5;
                strengh += 0.1;

                if(stamina == -5)
                {
                    stamina = 0;
                    wood -= (Math.round(strengh) + villagers);
                    strengh -= 0.1;
                }

                morewood.innerHTML = wood;
                rest.innerHTML = stamina;
                document.getElementById("strengh").innerHTML = Math.round(strengh);
            }

            function chopstone()
            {
                var morestone = document.getElementById("stone");
                var rest = document.getElementById("stamina");
                stone += (Math.round(strengh) + villagers);
                stamina -= 5;
                strengh += 0.1;

                if(stamina == -5)
                {
                    stamina = 0;
                    stone -=(Math.round(strengh) + villagers);
                    strengh -= 0.1;
                }

                morestone.innerHTML = stone;
                rest.innerHTML = stamina;
                document.getElementById("strengh").innerHTML = Math.round(strengh);
            }
            
            function getfood()
            {
                var morefood = document.getElementById("food");
                var rest = document.getElementById("stamina");
                food += (Math.round(strengh) + villagers);
                stamina -= 5;

                if(stamina == -5)
                {
                    stamina = 0;
                    food -=(Math.round(strengh) + villagers);
                }

                rest.innerHTML = stamina;
                morefood.innerHTML = food;
            }


//stats
            function rest()
            {
                var heal = document.getElementById("hp");
                var rest = document.getElementById("stamina");
                HP +=5;
                stamina +=5;

                if (stamina>100)
                {
                    stamina = 100;
                }
                if (HP>100)
                {
                    HP = 100;
                }

                heal.innerHTML = HP;
                rest.innerHTML = stamina;
            }

            function buycastle()
            {
                var dewood = document.getElementById("wood");
                var destone = document.getElementById("stone");
                var defood = document.getElementById("food");
                var maxsw = document.getElementById("maxsw");
                var maxf = document.getElementById("maxf");
                var clvl = document.getElementById("clvl");
                var mv = document.getElementById("maxvillagers");
                var mwh = document.getElementById("mwh");
                var msh = document.getElementById("msh");

                if(food >= maxfood && wood >= maxstonewood && stone >= maxstonewood)
                {
                    food -= 1000;
                    wood -= 10000;
                    stone -= 10000;
                    maxstonewood *= 2;
                    maxfood *=2;
                    castlelvl +=1;
                    strengh +=10*castlelvl;
                    maxwh *=2;
                    maxsh *=3;
                    maxvillagers = maxwh+maxsh;
                }
                mv.innerHTML = maxvillagers;
                maxsw.innerHTML = maxstonewood;
                dewood.innerHTML = wood;
                destone.innerHTML = stone;
                defood.innerHTML = food;
                maxf.innerHTML = maxfood;
                clvl.innerHTML = castlelvl;
                mwh.innerHTML = maxwh;
                msh.innerHTML = maxsh;
                document.getElementById("strengh").innerHTML = Math.round(strengh);
            }

            function buywhouse()
            {
                
            }



              /*function eat
            {
                var heal = document.getElementById("hp")
                var rest = document.getElementById("stamina")
                maxhp +=5
                maxstamina +=5

                if (stamina>100)
                {
                    stamina = 100
                }
                if (HP>100)
                {
                    HP = 100
                }

                heal.innerHTML = HP
                rest.innerHTML = stamina
            }*/
