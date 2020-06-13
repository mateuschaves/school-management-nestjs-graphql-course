import { Resolver, Args, Mutation, Query } from "@nestjs/graphql";
import { StudentType } from './student.type';
import { StudentService } from './student.service';
import { CreateStudentInput } from './create-student.input';

@Resolver(of => StudentType)
export class StudentResolver {
    constructor(
        private studentService: StudentService
    ) { }

    @Mutation(returns => StudentType)
    createStudent(
        @Args('createStudentInput') createStudentInput: CreateStudentInput
    ) {
        return this.studentService.createStudent(createStudentInput);
    }

    @Query(returns => StudentType)
    student(
        @Args('id') id: string
    ) {
        return this.studentService.getStudent(id);
    }

    @Query(returns => [StudentType])
    students(
    ) {
        return this.studentService.getStudents();
    }
}