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


def getDictFromFeedback(excel_file_path):
    Projects_clean2 = pd.read_excel(excel_file_path, sheet_name='Feedback - Assignment Manager')
    #removing 1st column as 1st column is NA
    Projects_clean2.drop(Projects_clean2.columns[0], axis=1, inplace=True)
    #transponsing row to column and column to rows
    df_tr = Projects_clean2.transpose()
    #converting 1st row to column headers
    header_row = df_tr.iloc[0]
    df2 = pd.DataFrame(df_tr.values[1:], columns=header_row)
    #removing last 2 lines
    df2.drop(df2.tail(2).index,inplace=True)
    #converting df to dict
    dictOfSingleFeedbacks =  df2.to_dict('records')
    #adding 2nd row of briefs and positives to 1st row
    dictOfSingleFeedbacks[0]['brief'] = dictOfSingleFeedbacks[1]['Line Manager']
    dictOfSingleFeedbacks[0]['positives/ebis'] = dictOfSingleFeedbacks[1]['Quality of Deliverables']
    my_dict = dictOfSingleFeedbacks[0]
    clean_dict = {k: my_dict[k] for k in my_dict if not pd.isna(my_dict[k])}
    final_dict = dict(set(my_dict.items()) - set(clean_dict.items()))
    final_dict = {"negative":final_dict,"positive":clean_dict,"total":dictOfSingleFeedbacks}
    return final_dict
   
   
