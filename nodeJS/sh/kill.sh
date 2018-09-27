#! /bin/bash

search=$1
#echo $search
type=$2
#echo $type

ps -ef | grep "$search" | grep python
# ps -ef | grep "$search" | grep -v "$0" | grep -v "grep"
idListStr=`ps -ef | grep "$search" | grep -v "$0" | grep -v "grep" | awk '{print $2}'`
echo $idListStr

idList=(${idListStr// / })
len=${#idList[@]}
#echo $len

if [ "$type" = "all" ]
then
    echo "type = $type"
else
    len=`expr $len - 1`
fi
#echo $len

#echo "---------------"
for((i=0;i<$len;i++));
do
id=${idList[i]}
kill -9 $id
#echo "killed $id"
done
#echo "---------------"

:<<!
for id in $idListStr
do
kill -9 $id
#echo "killed $id"
done
!

ps -ef | grep "$search" | grep -v "$0" | grep -v "grep"