import { IsOptional } from 'class-validator';

export class UpdateTodoDto {
  @IsOptional()
  readonly completed: boolean;

  @IsOptional()
  readonly task: string;

  @IsOptional()
  readonly completedAt: Date;

  readonly updatedAt: Date;
}
