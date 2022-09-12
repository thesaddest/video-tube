import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Query,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { VideoService } from "./video.service";
import { Auth } from "../auth/decorators/auth.decorator";
import { VideoDto } from "./video.dto";
import { CurrentUser } from "../user/user.decorator";

@Controller("video")
export class VideoController {
  constructor(private readonly videoService: VideoService) {}

  @Get()
  async getAll(@Query("searchTerm") searchTerm?: string) {
    return this.videoService.getAll(searchTerm);
  }

  @Get("get-private/:id")
  @Auth()
  async getPrivateVideo(@Param("id") id: string) {
    return this.videoService.byId(+id);
  }

  @Get("most-popular")
  async getMostPopularByViews() {
    return this.videoService.getMostPopularByViews();
  }

  @Get(":id")
  async getVideo(@Param("id") id: string) {
    return this.videoService.byId(+id);
  }

  @HttpCode(200)
  @Post()
  @Auth()
  async createVideo(@CurrentUser("id") id: number) {
    return this.videoService.create(id);
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Put(":id")
  @Auth()
  async updateVideo(@Param("id") id: string, @Body() dto: VideoDto) {
    return this.videoService.update(+id, dto);
  }

  @HttpCode(200)
  @Delete(":id")
  @Auth()
  async deleteVideo(@Param("id") id: string) {
    return this.videoService.delete(+id);
  }

  @HttpCode(200)
  @Put("update-views/:videoId")
  async updateViews(@Param("videoId") videoId: string) {
    return this.videoService.updateViewsCount(+videoId);
  }

  @HttpCode(200)
  @Put("update-likes/:videoId")
  async updateLikes(@Param("videoId") videoId: string) {
    return this.videoService.updateLikesCount(+videoId);
  }
}
