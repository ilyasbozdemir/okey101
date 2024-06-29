import React from 'react';

const SitemapXSLContent = () => (
  <div
    id="sitemap__content"
    dangerouslySetInnerHTML={{
      __html: `
        <p class="text">
          Number of URLs in this XML Sitemap: <xsl:value-of select="count(//sitemap:url)" />.
        </p>
        <table id="sitemap__table" cellpadding="10">
          <thead>
            <tr>
              <th class="loc">URL</th>
              <xsl:if test="count(//sitemap:url/sitemap:lastmod) > 0">
                <th class="lastmod">Last Modified</th>
              </xsl:if>
              <xsl:if test="count(//sitemap:url/sitemap:changefreq) > 0">
                <th class="changefreq">Change Frequency</th>
              </xsl:if>
              <xsl:if test="count(//sitemap:url/sitemap:priority) > 0">
                <th class="priority">Priority</th>
              </xsl:if>
            </tr>
          </thead>
          <tbody>
            <xsl:for-each select="//sitemap:url">
              <tr>
                <td class="loc">
                  <a href="{sitemap:loc}">
                    <xsl:value-of select="sitemap:loc" />
                  </a>
                </td>
                <xsl:if test="sitemap:lastmod">
                  <td class="lastmod">
                    <xsl:value-of select="sitemap:lastmod" />
                  </td>
                </xsl:if>
                <xsl:if test="sitemap:changefreq">
                  <td class="changefreq">
                    <xsl:value-of select="sitemap:changefreq" />
                  </td>
                </xsl:if>
                <xsl:if test="sitemap:priority">
                  <td class="priority">
                    <xsl:value-of select="sitemap:priority" />
                  </td>
                </xsl:if>
              </tr>
            </xsl:for-each>
          </tbody>
        </table>
      `,
    }}
  />
);

export default SitemapXSLContent;
