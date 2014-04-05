<?xml version="1.0" encoding="utf-8"?>

<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">

  <html>
  <head>
    <title>Staff</title>
    <link rel="stylesheet" href="staff.css" />
  </head>

  <body>

    <div class="container">
      <div class="nav">
        This might be where a nav bar goes
      </div>

      <h1>Here's all of our staff!</h1>

      <xsl:for-each select="staff/member">

        <div class="member">
          <img width="200" class="icon">
            <xsl:attribute name="src">
              <xsl:value-of select="icon" />
            </xsl:attribute>
          </img>

          <h2><xsl:value-of select="name" /></h2>
          <xsl:value-of select="bio" />

          <div class="break" />
        </div>

      </xsl:for-each>

      <p>This is where we put the copyright information</p>

    </div>

  </body>
  </html>

</xsl:template>
</xsl:stylesheet>
