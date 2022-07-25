import ColorSheet from "../ColorSheet";
import Header from "../Header";
import Quaternion from "../Quaternion";
import Vector3 from "../Vector3";

export default class ImuMessage {
    __color = ColorSheet.colors[7];

    header;
    orientation;
    orientation_covariance;
    angular_velocity;
    angular_velocity_covariance;
    linear_acceleration;
    linear_acceleration_covariance;
    constructor(header: Header, orientation:Quaternion, orientation_covariance: number[], angular_velocity:Vector3, angular_velocity_covariance: number[], linear_acceleration:Vector3, linear_acceleration_covariance: number[]) {

        this.header = header
        this.orientation = orientation
        this.orientation_covariance = orientation_covariance
        this.angular_velocity = angular_velocity
        this.angular_velocity_covariance = angular_velocity_covariance
        this.linear_acceleration = linear_acceleration
        this.linear_acceleration_covariance = linear_acceleration_covariance
    }
}