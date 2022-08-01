#!/bin/python3

import rospy 
from std_msgs.msg import String

def string_throw():
    pub = rospy.Publisher("thrown_strings", String, queue_size=10)
    rospy.init_node("string_thrower", anonymous=True)
    rate = rospy.Rate(10)
    while not rospy.is_shutdown():
        msg = "Throwing String"
        pub.publish(msg)
        rate.sleep()

if __name__ == '__main__':
    string_throw()