grades = []

for i in range(5):
    grade = float(input(f"Enter a grade {i+1}: "))
    grades.append(grade)

print("Highest grade:", max(grades))
print("Lowest grade:", min(grades))
print("Average:", sum(grades) / len(grades))