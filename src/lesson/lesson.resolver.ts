import { Resolver, Query, Mutation } from "@nestjs/graphql";
import { LessonType } from './lesson.type';

@Resolver(of => LessonType)
export class LessonResolver {
    @Query(returns => LessonType)
    lesson() {
        return {
            id: 'asdadasd',
            name: 'GA',
            startDate: (new Date()).toISOString(),
            endDate: (new Date()).toISOString()
        }
    }

    @Mutation(returns => LessonType)
    createLession() {

    }
}