import { Item } from "../../types/items";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon, LatLngExpression } from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import MapUpdater from "./MapUpdater";
import UserBookingForm from "./BookingForm";
import ItemDetailTop from "./ItemDetailTop";
import { useState } from "react";
import Lottie from "lottie-react";
import emailAnimation from "../../assets/emailAnimation.json"
// Configure default icon for leaflet
delete (Icon.Default.prototype as any)._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const UserContactModal = ({ selectedItem }: { selectedItem: Item }) => {
  const [isSendingEmail, setIsSendingEmail] = useState<boolean>(false);

  const defaultCenter: LatLngExpression = [13.7563, 100.5018];
  const markerPosition: LatLngExpression =
    selectedItem?.lat && selectedItem?.lng
      ? [selectedItem.lat, selectedItem.lng]
      : defaultCenter;

  return (
    <dialog id="my_modal_4" className="modal">
      <div className="modal-box w-11/12 max-w-4xl relative max-h-[90vh] overflow-y-auto scrollbar-hide">
        {isSendingEmail ? (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-64 h-64">
              <Lottie 
                animationData={emailAnimation}
                loop={true}
              />
            </div>
          </div>
        ) : (
          <>
            <form method="dialog" className="absolute right-2 top-2">
              <button className="btn btn-sm btn-circle">✕</button>
            </form>

            <div className="flex flex-col justify-center gap-4 my-4">
              {selectedItem && <ItemDetailTop selectedItem={selectedItem} />}

              <div className="lg:pl-4">
                <h2 className="text-xl font-semibold mb-2">
                  Property Features:
                </h2>
                <p>{selectedItem?.description}</p>
              </div>

              <div className="w-full h-[300px] lg:h-[400px] relative">
                <MapContainer
                  center={markerPosition}
                  zoom={13}
                  scrollWheelZoom={true}
                  style={{
                    height: "100%",
                    width: "100%",
                    position: "absolute",
                  }}
                  className="z-10"
                >
                  <MapUpdater position={markerPosition} />
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  {selectedItem?.lat && selectedItem?.lng && (
                    <Marker position={markerPosition}>
                      <Popup>
                        {selectedItem.name || "Location"} <br />
                        {selectedItem.location || "Address"}
                      </Popup>
                    </Marker>
                  )}
                </MapContainer>
              </div>

              {selectedItem && !isSendingEmail && (
                <UserBookingForm
                  selectedItem={selectedItem}
                  setIsSendingEmail={setIsSendingEmail}
                />
              )}
            </div>
          </>
        )}
      </div>
    </dialog>
  );
};

export default UserContactModal;