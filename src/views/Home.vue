<template>
    <p class="sticky top-0 bg-burnham flex gap-2 items-center justify-center text-bone text-center p-2">
        <span>
            Next Dinner is at Figma Config 
        </span>
        <span class="text-orange font-bold">
            GET TICKETS
        </span>
    </p>
    <!-- BORDER -->

    <div class="flex flex-col items-center justify-center h-screen gap-40">
    
        <p class="text-center text-4xl capitalize text-orange font-semibold ">
           <span class="uppercase font-extrabold"> sup </span> club
        </p>    

        <div class="flex flex-col items-center">

            <p class="text-center text-lg p-3">
                JOIN BRILLIANT MINDS IN BRAND, WEB, PRODUCT, UI/UX AND ICON DESIGN FOR EVENINGS OF COLLABORATION AND INSPIRATION
            </p>
        
            <button class="bg-orange p-3 text-white capitalize font-semibold">SEE NEXT EVENT</button>
        </div>

    </div>

    <p class="text-orange text-3xl font-extrabold w-1/2 pl-3 uppercase">
        Gather ‘round the table
    </p>

    <div class="bg-burnham p-3 flex flex-col gap-8 py-36">
        <!-- images slanted -->
        <p class="text-bone uppercase pr-9"> Our events are for all designers across any discipline and career stage. </p>

        <p class="text-orange text-4xl font-bold"> From Students to Industry Leaders, All Designers Welcome. </p>        
    </div>

    <div>
        <!-- bg-img -->
        <div class="text-bone font-extrabold bg-orange pr-9 flex flex-col gap-5 pl-3 pb-40">

            <p class="text-4xl w-min font-bold"> Config Design Dinner </p>
            <button class="bg-bone text-orange p-2 text-sm w-fit">SPEAKERS</button>
            
            <div class="flex gap-3 text-sm">

                <div v-for="i in 2" class="flex flex-col">
                        <!-- image -->
                         
                    <div class="w-5 h-5 rounded-full bg-bone"></div>
                        <span class="font-bold">
                            Soren Iverson
                        </span>
                        
                        <span class="font-normal">
                            @Soren_Iverson
                        </span>    
                    </div>
                </div>
            </div>

        <div>
            <!-- orange bg -->
            <p>The deets</p>
            <button>SPONSORED BY</button>
            <p>mindsdb</p>
            <p>Webflow</p>

            <p>JUNE 26, 2024</p>
            <p>6:00 PM</p>
            <p>SAN FRANCISCO</p>
            <p>Early bird $15 / Standard $25</p>

            <button>GET TICKETS</button>
        </div>

        <div>
            <h2>WHY DESIGN DINNERS</h2>

            <p>sure there are design meet ups out there.</p>

            <!-- slanted image -->

            <p v-for="i in 5">Expand your creative circle</p>
        </div>


        <div>
            <!-- orange border and bg -->
            <h2>More events</h2>
            <p>Summer Dates Coming Soon</p>
        </div>

        <div>
            <!-- image -->
            <h2>stay in the loop</h2>

            <p> From future desifn Dinners to workshops,panels and more - stay in the loop on all events.</p>

            <form action="">

                <label for="email">Email</label>
                <input id="email" type="text" placeholder="">

                <label for="fname">Email</label>
                <input id="fname" type="text" placeholder="">
                
                <label for="lname">Email</label>
                <input id="lname" type="text" placeholder="">

                <button>SUBMIT</button>
            </form>
        </div>


        <footer>
            <p>
                supclub
            </p>
            <!-- border -->

            <p>credits</p>

            <p v-for="i in 3">
                <span>
                    Levi JONES
                </span>
                <span>
                    CD+ WEBFLOW
                </span>
            </p>
        </footer>

    </div>



</template>
