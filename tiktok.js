hostname = *.tiktokv.com, *.byteoversea.com, *.musical.ly, *.snssdk.com

^https://api[\w-]*?.tiktokv.com/aweme/v\d/policy/notice/? url reject

# TikTok By wzw1997007 & Choler
(?<=_region=)CN(?=&) url 307 US
(?<=&app_version=)1[7-9]..(?=.?.?&) url 307 17..
(?<=\?version_code=)1[7-9]..(?=.?.?&) url 307 17..
