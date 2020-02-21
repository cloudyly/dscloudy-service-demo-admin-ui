<template>
  <div id="service_demo">
    <el-container class="home-container">
      <el-aside width="250px">
        <el-menu background-color="transparent"
                 text-color="#ffffff"
                 active-text-color="#ffd04b">
          <!-- 一级菜单 -->
          <el-submenu index="1">
            <!-- 一级菜单模板 -->
            <template slot="title">
              <!-- 图标 -->
              <i class="el-icon-location"></i>
              <!-- 文本 -->
              <span>DEMO</span>
            </template>
            <!-- 二级子菜单 -->
            <el-menu-item index="1-4-1">
              <!-- 二级菜单模板 -->
              <template slot="title">
                <!-- 图标 -->
                <i class="el-icon-location"></i>
                <!-- 文本 -->
                <span>子菜单一</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>Main
        <h1>Demo</h1>
      </el-main>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
  .home-container {
    height: 100%;

    & .el-aside {
      background-color: #333744;
    }

    & .el-main {
      background-color: #eaedf1;
    }
  }
</style>
