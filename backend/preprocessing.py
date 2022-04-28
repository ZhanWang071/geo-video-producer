import pandas as pd

excel_data_df = pd.read_excel('./data/globalterrorismdb_0221dist.xlsx')
# print(excel_data_df)

counts_df = pd.DataFrame(excel_data_df.groupby(['latitude','longitude']).size().reset_index(name='counts'))
# print(counts_df)

json_str = counts_df.to_json(orient="records")
# print('Excel Sheet to JSON:\n', json_str)

with open('./data/global_terrorism.json', 'w') as f:
    f.write(json_str)