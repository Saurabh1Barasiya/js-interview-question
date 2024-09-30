import os

# Directory where you want to create the files
directory = "demo"

# Create the directory if it doesn't exist
if not os.path.exists(directory):
    os.makedirs(directory)

# Loop to create 100 empty files
for i in range(1, 101):
    file_name = f"script{i}.js"
    file_path = os.path.join(directory, file_name)
    
    # Create and open the file in write mode, then close it immediately (empty file)
    open(file_path, 'w').close()

print("100 empty files created successfully.")
