import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontFamily: 'Helvetica',
    fontSize: 10,
  },
  headerRow: {
    flexDirection: 'row',
    borderTop: 2,
    borderLeft: 2,
    borderRight: 2,
    borderBottom: 1,
    borderColor: '#000',
  },
  logoCell: {
    width: '25%',
    borderRight: 2,
    borderColor: '#000',
    padding: 8,
    justifyContent: 'center',
  },
  titleCell: {
    width: '50%',
    borderRight: 2,
    borderColor: '#000',
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pageNumberCell: {
    width: '25%',
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 24,
    fontFamily: 'Helvetica-Bold',
    letterSpacing: 1,
  },
  logoStripes: {
    flexDirection: 'row',
    marginBottom: 4,
    gap: 2,
  },
  stripe: {
    width: 4,
    height: 16,
    backgroundColor: '#000',
    transform: 'skewX(-20deg)',
  },
  mainTitle: {
    fontSize: 14,
    fontFamily: 'Helvetica-Bold',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 11,
    fontFamily: 'Helvetica-Bold',
  },
  pageNumber: {
    fontSize: 18,
    fontFamily: 'Helvetica-Bold',
  },
  pageText: {
    fontSize: 9,
    marginTop: 4,
  },
  tableRow: {
    flexDirection: 'row',
    borderLeft: 2,
    borderRight: 2,
    borderBottom: 1,
    borderColor: '#000',
  },
  tableRowLast: {
    flexDirection: 'row',
    borderLeft: 2,
    borderRight: 2,
    borderBottom: 2,
    borderColor: '#000',
  },
  cell: {
    padding: 6,
    flexDirection: 'row',
  },
  cellBorderRight: {
    borderRight: 1,
    borderColor: '#000',
  },
  cellBorderRightBold: {
    borderRight: 2,
    borderColor: '#000',
  },
  label: {
    fontFamily: 'Helvetica',
  },
  value: {
    fontFamily: 'Helvetica',
    marginLeft: 4,
  },
  waterLabel: {
    fontFamily: 'Helvetica',
    marginLeft: 8,
  },
  checkMark: {
    fontSize: 12,
    fontFamily: 'Helvetica-Bold',
  },
  remarksCell: {
    width: '33.33%',
    padding: 6,
  },
  remarksLabel: {
    fontFamily: 'Helvetica',
  },
  hyphen: {
    fontFamily: 'Helvetica',
  },
});

const BoreDMDocument = () => {
  return (
    <Document>
      <Page size="LETTER" style={styles.page}>
        {/* Header Row */}
        <View style={styles.headerRow}>
          {/* Logo Cell */}
          <View style={styles.logoCell}>
            <View style={styles.logoStripes}>
              <View style={styles.stripe} />
              <View style={styles.stripe} />
              <View style={styles.stripe} />
            </View>
            <Text style={styles.logoText}>BOREDM</Text>
          </View>
          
          {/* Title Cell */}
          <View style={styles.titleCell}>
            <Text style={styles.mainTitle}>Riverside Condominiums</Text>
            <Text style={styles.subtitle}>General Location - Project</Text>
          </View>
          
          {/* Page Number Cell */}
          <View style={styles.pageNumberCell}>
            <Text style={styles.pageNumber}>B-17</Text>
            <Text style={styles.pageText}>Page 1 of 1</Text>
          </View>
        </View>

        {/* Row 1 */}
        <View style={styles.tableRow}>
          <View style={{...styles.cell, ...styles.cellBorderRightBold, width: '33.33%'}}>
            <Text style={styles.label}>Drilling Firm:</Text>
            <Text style={styles.value}>BoreDM Drilling</Text>
          </View>
          <View style={{...styles.cell, ...styles.cellBorderRightBold, width: '33.33%'}}>
            <Text style={styles.label}>Project No.:</Text>
            <Text style={styles.value}>25-3332</Text>
          </View>
          <View style={{...styles.remarksCell}}>
            <Text style={styles.remarksLabel}>Remarks:</Text>
            <Text style={styles.hyphen}>-</Text>
          </View>
        </View>

        {/* Row 2 */}
        <View style={styles.tableRow}>
          <View style={{...styles.cell, ...styles.cellBorderRightBold, width: '33.33%'}}>
            <Text style={styles.label}>Driller:</Text>
            <Text style={styles.value}>PA</Text>
          </View>
          <View style={{...styles.cell, ...styles.cellBorderRightBold, width: '33.33%'}}>
            <Text style={styles.label}>Date Drilled:</Text>
            <Text style={styles.value}>03/05/2025</Text>
          </View>
          <View style={{...styles.remarksCell}}>
          </View>
        </View>

        {/* Row 3 */}
        <View style={styles.tableRow}>
          <View style={{...styles.cell, ...styles.cellBorderRightBold, width: '33.33%'}}>
            <Text style={styles.label}>Logged By:</Text>
            <Text style={styles.value}>LA</Text>
          </View>
          <View style={{...styles.cell, ...styles.cellBorderRightBold, width: '33.33%'}}>
            <Text style={styles.label}>Boring Depth:</Text>
            <Text style={styles.value}>-</Text>
          </View>
          <View style={{...styles.remarksCell}}>
          </View>
        </View>

        {/* Row 4 */}
        <View style={styles.tableRow}>
          <View style={{...styles.cell, ...styles.cellBorderRightBold, width: '33.33%'}}>
            <Text style={styles.checkMark}>▽</Text>
            <Text style={styles.waterLabel}>Water :</Text>
            <Text style={styles.value}>N/A</Text>
          </View>
          <View style={{...styles.cell, ...styles.cellBorderRightBold, width: '33.33%'}}>
            <Text style={styles.label}>Boring Elevation:</Text>
            <Text style={styles.value}>N/A</Text>
          </View>
          <View style={{...styles.remarksCell}}>
          </View>
        </View>

        {/* Row 5 - Last Row */}
        <View style={styles.tableRowLast}>
          <View style={{...styles.cell, ...styles.cellBorderRightBold, width: '33.33%'}}>
            <Text style={styles.label}>Hammer Type:</Text>
            <Text style={styles.value}>-</Text>
          </View>
          <View style={{...styles.cell, width: '66.66%'}}>
            <Text style={styles.label}>Brand Address:</Text>
            <Text style={styles.value}>4909 N. 44th St, Phoenix, AZ 85018</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default BoreDMDocument;
