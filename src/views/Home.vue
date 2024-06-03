<template>
    <p class="bg-burnham flex gap-2 items-center justify-center text-bone text-center p-2">
        <span>
            Next Dinner is at Figma Config 
        </span>
        <span class="text-orange font-bold">
            GET TICKETS
        </span>
    </p>
    <!-- BORDER -->

    <div>
    
        <p>sup club</p>    

        <p>JOIN BRILLIANT MINDS IN BRAND, WEB, PRODUCT, UI/UX AND ICON DESIGN FOR EVENINGS OF COLLABORATION AND INSPIRATION</p>
        
        <button>SEE NEXT EVENT</button>

    </div>

    <p>
        Gather ‘round the table
    </p>


    <div>
        <!-- images slanted -->

        <p> Our events are for all designers across any discipline and career stage. </p>

        <p> From Students to Industry Leaders, All Designers Welcome. </p>        
    </div>

    <div>
        <!-- bg-img -->
        <div>

            <p> Config Design Dinner </p>
            <button>SPEAKERS</button>
            <p v-for="i in 2">
                <!-- image -->
                <span>
                    Soren Iverson
                </span>
                <span>
                    @Soren_Iverson
                </span>    
            </p>
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
