#!/usr/bin/env python


import rospy
import std_msgs


class template_basic:

    def __init__(self):
        # here you can init any variables or datatypes needed for your python (ROS) Node
        # below are some examples :

        self.nodeName = "NODE NAME HERE"
        self.data = "SOME DATA HERE or None"

        # first thing to do is init the name of the node that this file will represent
        rospy.init_node(self.nodeName, anonymous=False, log_level=rospy.INFO)

        # after your node is initialized, begin subscribing to any topics that will provide data to your node
        self.some_subscriber = rospy.Subscriber(
            "TOPIC NAME HERE", Boolean, callback=self.func1)

        self.some_other_subscriber = rospy.Subscriber(
            "ANOTHER TOPIC NAME HERE", String, callback=self.func2)

        # in the rospy.Subscriber method, the callback=SOMEFUNC is very important, as that function will be described below

        # set up any publishers, where data can be exported from the node

        self.some_publisher = rospy.Publisher(
            "TOPIC NAME HERE", String, queue_size=3)

        self.some_other_publisher = rospy.Publisher(
            "ANOTHER TOPIC HERE", UInt32, queue_size=10)

        # From here to whenever, feel free to add whatever functionality you find necessary to implement within this node, starting with the callback functions

    def func1(self, bool):
        self.data_from_subscriber = bool

    def func2(self, string):
        self.data_from_subscriber2 = string

    def logic(self):
        while not rospy.is_shutdown():
            # place all of the logic witin this block

            # a recommendation might be to make sure all of your subscribers have recieved information, like so

            if (not self.data_from_subscriber) or (not self.data_from_subscriber2):
                continue

            # then continue with any logic that applies this data

        # once the class structure for your node is complete, make sure the class is self-invoking


def main():
    node = template_basic()
    node.logic()


if __name__ == '__main__':

    main()
