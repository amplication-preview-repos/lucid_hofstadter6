/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Playlist as PrismaPlaylist } from "@prisma/client";

export class PlaylistServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.PlaylistCountArgs, "select">): Promise<number> {
    return this.prisma.playlist.count(args);
  }

  async playlists(
    args: Prisma.PlaylistFindManyArgs
  ): Promise<PrismaPlaylist[]> {
    return this.prisma.playlist.findMany(args);
  }
  async playlist(
    args: Prisma.PlaylistFindUniqueArgs
  ): Promise<PrismaPlaylist | null> {
    return this.prisma.playlist.findUnique(args);
  }
  async createPlaylist(
    args: Prisma.PlaylistCreateArgs
  ): Promise<PrismaPlaylist> {
    return this.prisma.playlist.create(args);
  }
  async updatePlaylist(
    args: Prisma.PlaylistUpdateArgs
  ): Promise<PrismaPlaylist> {
    return this.prisma.playlist.update(args);
  }
  async deletePlaylist(
    args: Prisma.PlaylistDeleteArgs
  ): Promise<PrismaPlaylist> {
    return this.prisma.playlist.delete(args);
  }
}
