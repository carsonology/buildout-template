#insert p tags between paragraph breaks

#get paragraphs that will be wrapped in p tags from user
# note: you must type the word "end" in all lowercase after all the lines
# you want to input so the program knows when to stop collecting lines.
lines = []
print('Copy and paste paragraphs, with the word "end" as the final paragraph: ')
while True:
    line = input()
    if line != "end":
        if line:
            lines.append(line)
    else:
        break

#initiate p tag string that will contain wrapped grafs
p_tag_grafs = "<p>"

#insert p tags between each paragraph
for index, graf in enumerate(lines):
    p_tag_grafs += "\n\t" + graf + "\n</p>"
    if index != len(lines) - 1:
        p_tag_grafs += "\n<p>"

print(p_tag_grafs)

#input desired csv file name for final output
file_name = "self-pay1.txt"

#write p tag grafs to a file ready for copying
with open(file_name, 'w') as file:
    file.write(p_tag_grafs)
