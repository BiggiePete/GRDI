import BatteryStateMessage from "./Messages/BatteryStateMessage";
import CameraInfoMessage from "./Messages/CameraInfoMessage";
import ChannelFloat32Message from "./Messages/ChannelFloat32Message";
import CompressedImageMessage from "./Messages/CompressedImageMessages";
import FluidPressureMessage from "./Messages/FluidPressureMessage";
import IlluminanceMessage from "./Messages/IlluminanceMessage";
import ImageMessage from "./Messages/ImageMessage";
import ImuMessage from "./Messages/ImuMessage";
import JointStateMessage from "./Messages/JointStateMessage";
import JoyFeedbackMessage from "./Messages/JoyFeedbackMessage";
import JoyMessage from "./Messages/JoyMessage";
import RegionOfInterestMessage from "./Messages/RegionOfInterestMessage";
import Vector3 from "./Vector3";

export const ROSMessages = [
    BatteryStateMessage,
    CameraInfoMessage,
    ChannelFloat32Message,
    CompressedImageMessage,
    FluidPressureMessage,
    IlluminanceMessage,
    ImageMessage,
    ImuMessage,
    JointStateMessage,
    JoyMessage,
    RegionOfInterestMessage,
    JoyFeedbackMessage,
    
    Vector3,
]
