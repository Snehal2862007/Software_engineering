# Student Management System - Agile Methodology Demonstration
# Run: python agile.py

backlog = [
    ("PB1", "Login Module", "High"),
    ("PB2", "Registration", "High"),
    ("PB3", "Add Student", "High"),
    ("PB4", "Delete Student", "Medium"),
    ("PB5", "Search Student", "Medium"),
    ("PB6", "Report", "Low"),
    ("PB7", "Update Student", "High")
]

print("\n========== STUDENT MANAGEMENT SYSTEM ==========")
print("\n========== SCRUM IMPLEMENTATION ==========")
print("\nPRODUCT BACKLOG")
for x in backlog:
    print(f"{x[0]}  {x[1]:20} Priority: {x[2]}")

print("\nSprint Duration: 2 Weeks")
print("\nSprint 1:")
for x in ["Registration", "Login", "Add Student"]:
    print("  ✓", x)
print("\nSprint 2:")
for x in ["Search", "Delete", "Update", "Report"]:
    print("  ✓", x)

print("\nDaily Scrum:")
print("  Yesterday : Completed Login Module")
print("  Today     : Develop Registration Module")
print("  Issue     : Testing / database connection")

print("\nSprint Review:")
print("  ✓ Login")
print("  ✓ Registration")
print("  ✓ Add Student")

print("\nSprint Retrospective:")
print("  1. What went well?")
print("  2. What should improve?")
print("  3. Action items")

print("\n========== KANBAN IMPLEMENTATION ==========")
print("\nTO DO:")
for x in ["Delete Student", "Search Student", "Report"]:
    print("  -", x)
print("\nIN PROGRESS:")
for x in ["Add Student", "Update Student"]:
    print("  -", x)
print("\nDONE:")
for x in ["Login", "Registration"]:
    print("  ✓", x)

print("\n========== XP IMPLEMENTATION ==========")
print("Planning Game       : Select high-priority user stories")
print("Small Releases      : Deliver features in small iterations")
print("Pair Programming    : Two developers work together")
print("TDD                 : Write tests with implementation")
print("Continuous Integration: Integrate code frequently")
print("Refactoring         : Improve code without changing behavior")

print("\n========== COMPARISON ==========")
print("Scrum  -> Fixed sprints, backlog, daily scrum, review, retrospective")
print("Kanban -> Continuous flow, visual board, To Do/In Progress/Done")
print("XP     -> Short iterations, TDD, pair programming, refactoring")
print("\nProject demonstration completed.")
