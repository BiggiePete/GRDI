#!/bin/sh
# Use this script to run the publisher and subscriber. If you don't have ros or rospy, it won't work. 

# Start ros and scripts  
roscore & python3 rospub.py & python3 rossub.py
