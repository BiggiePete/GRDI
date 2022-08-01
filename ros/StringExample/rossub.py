#!/bin/python3

import rospy 
from std_msgs.msg import String

def init_sub():
    sub = rospy.Subscriber("thrown_strings", String, callback = string_catch)

def string_catch():
    pub = rospy.Publisher("acknowledge_string", String, queue_size=10)
    rospy.init_node("string_catcher", anonymous=True)
    rospy.Rate(10)
    while not rospy.is_shutdown():
        msg = "String caught!"
        pub.publish(msg)

if __name__ == '__main__':
    string_catch()