import React from "react";


const Mapa: React.FC = () => {
    return (<>
        <div className="mx-auto max-w-6xl my-10 rounded-[32px] overflow-hidden bg-gray-50">
            <iframe
                width="100%"
                height="450"
                loading="lazy"
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDpDf8bugYl66OzmdVkM3Q8WCd3SkvdLJA
    &q=Av.+Ramón+Picarte+1085,+Valdivia,+Los+Ríos">
            </iframe>
        </div>
        <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDpDf8bugYl66OzmdVkM3Q8WCd3SkvdLJA"></script>
    </>
    );
}

export default Mapa;