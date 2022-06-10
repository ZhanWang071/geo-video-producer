import pandas as pd

excel_data_df = pd.read_csv('./data/SH_covid19_0309_0501.csv')
# print(excel_data_df)

counts_df = pd.DataFrame(excel_data_df)[['latitude','longitude','counts']]
# print(counts_df)

json_str = counts_df.to_json(orient="records")
# print('Excel Sheet to JSON:\n', json_str)

with open('./data/sh_covid19.json', 'w') as f:
    f.write(json_str)