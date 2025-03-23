import os

file_path = __file__ + r'\..'

for folder in os.listdir(rf'{file_path}\old'):
	for file in os.listdir(rf'{file_path}\old\{folder}'):
		try:
		# print(file)
		# print(rf'{file_path}\old\{folder}\{file}')
			with open(rf'{file_path}\old\{folder}\{file}', 'rb') as read_file:
				folder_path = rf'{file_path}\{file.split('.')[1].upper()}'
				os.makedirs(folder_path, exist_ok=True)
				with open(rf'{folder_path}\{file}', 'wb') as f:
					f.write(read_file.read())
		except Exception as e:
			print('ERROR', folder, file, e)
			print(rf'{file_path}\old\{folder}\{file}')