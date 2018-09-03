#! /bin/sh
# ps -ef | grep /venv/bin/python

search=$1
echo $search
ps -ef | grep "$search"
ID=`ps -ef | grep "$search" | grep -v "$0" | grep -v "grep" | awk '{print $2}'`
#echo $ID
#echo "---------------"
for id in $ID
do
#kill -9 $id
#echo "killed $id"
done
echo "---------------"
