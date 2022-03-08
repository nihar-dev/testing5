#lib needed for this is pip3  install google-cloud-storage
# we have create python enviourment for this . 

import os

from google.cloud import storage
# $env:GOOGLE_APPLICATION_CREDENTIALS="C:\Users\nihar\Downloads\project\python\creds.json"  // this is where we put our gcp credential file


# Instantiates a client

storage_client = storage.Client()


bucket_name = 'sastoken' # my bucket name 
source_file_name = 'text.txt' # source file name
destination_blob_name = 'text2.txt' # destination folder name 
 # below process to upload file from local folder to destination(google cloud bucket)
bucket = storage_client.bucket(bucket_name)
blob = bucket.blob(destination_blob_name)

blob.upload_from_filename(source_file_name) 

# printing success message
print(
    "File {} uploaded to {}.".format(
        source_file_name, destination_blob_name
    )
)
