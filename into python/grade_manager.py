students = []

for i in range(5):
    name = input(f"Enter name of student{i+1}: ")
    grade = float(input(f"Enter grade for {name}: "))
    students.append({"name": name, "grade": grade})

print("\n-----------")
print("\nGRADE TABLE")
print("-------------")

for student in students: 
        grade = student["grade"]

        if grade >=16:
            result = "very good"
        elif grade >= 14:
            result ="good"
        elif grade >= 12:
            result = "fair"
        elif grade >= 10:
            result = "pass"
        else:
            result = "fail"

        print(f"{student['name']} -> {grade}/20 ({result})")

        

average = sum(student["grade"] for student in students) / len(students)

highest = max(students, key=lambda student: student["grade"])
lowest = min(students, key=lambda student: student["grade"])
print("-------------------------------------------------")
print(f"Class average:  {average:.2f}/20")
print(f"Highest grade: {highest['name']} with {highest['grade']}/20")
print(f"Lowest grade: {lowest ['name']} with {lowest['grade']}/20")
        
